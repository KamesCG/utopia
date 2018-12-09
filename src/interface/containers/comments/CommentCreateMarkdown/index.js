/* --- Global Dependencies --- */
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux';
import {Editor, EditorState, ContentState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import { 
  draftToMarkdown,
  markdownToDraft  
} from 'markdown-draft-js'

/* --- Local  Dependencies --- */
import { Flex, Box, Button, HorizontalRule } from 'atomic'
import { 
  databaseWriteRequest,
} from 'store/departments/actions'

/* --- Module Dependencies --- */
import BlockStyleControls from './blockStyles'
import InlineStyleControls from './inlineStyles'

/* ------------ Component ------------ */
class DraftEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          markdown: 'Start writing',
          initialized: false,
          editorState: EditorState.createWithContent(convertFromRaw(markdownToDraft(this.props.markdown))),
        };
        
        // Action Handliers
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.clear = this.clear.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onTab = this.onTab.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
        this.saveContent = this.saveContent.bind(this);
    }

    handleKeyCommand(command) {
      const {editorState} = this.state;
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.setState({editorState: newState});
        return true;
      }
      return false;
    }

    clear() {
      var editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
      this.setState({ editorState });
    }

    onChange(editorState) {
      var markdown = draftToMarkdown(convertToRaw(editorState.getCurrentContent()));
      this.setState({editorState, markdown});
    }

    onTab(e) {
      const maxDepth = 4;
      this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
    }

    toggleBlockType(blockType) {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }

    toggleInlineStyle(inlineStyle) {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }

    saveContent() {
      const payload = {
        user: 'Kames Cox-Geraghty',
        avatar: 'https://lh3.googleusercontent.com/-JS9i1bSfAug/AAAAAAAAAAI/AAAAAAAAAzc/i9BxZkKChtM/photo.jpg',
        comment: this.state.markdown
      }
      const metadata = {
        branch: this.props.branch,
        delta: this.props.delta,
        writeType: this.props.writeType || 'update'
      }
    
      this.props.dispatch(databaseWriteRequest({payload,metadata}))
    }

    render() {
      const { editorState } = this.state;
      return (
        <div className="draft-js-editor-wrapper">
          <div className="editor RichEditor-root">
            <Box bg='white' boxShadow={2} mt={[20,30]} >

              <Flex align='center' justify='center' pt={[10,15]} px={[10,15]} >
                <Flex w={1} justify='stretch' >
                  <Box px={10} w={[1,1, 0.65]} >
                    <BlockStyleControls
                      editorState={editorState}
                      onToggle={this.toggleBlockType}
                    />
                  </Box>
    
                  <Box px={10} w={[1,1, 0.25]} >
                    <InlineStyleControls
                      editorState={editorState}
                      onToggle={this.toggleInlineStyle}
                    />
                  </Box>
    
                  <Box w={[1,1, 0.1]}>
                     <Button onClick={this.saveContent} gradient='blue' w={1}>Save</Button>
                  </Box>
                </Flex>
              </Flex>
              <HorizontalRule bc='gray'/>
              <div className="RichEditor-editor">
                <Box bg='white' h={[300,450, 600]} px={[20,40]} >
                <PerfectScrollbar>
                  <Editor
                    editorState={editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange} />
                </PerfectScrollbar>
                </Box>
              </div>
            </Box>

          </div>
        </div>
      );
    }
  };

  export default connect()(DraftEditor)