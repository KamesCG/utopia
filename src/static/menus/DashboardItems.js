import { brain, networkCentral, chromosome } from 'assets/svg'

export default [
  {
    label: "Proposals",
    route: "/dashboard/proposals/active",
    icon: brain,
    children: [
      {
        route: "/dashboard/proposals/active",
        label: "Active",
      },
      {
        route: "/dashboard/proposals/completed",
        label: "Completed",
      },
      {
        route: "/dashboard/proposals/create",
        label: "Create",
      },
    ]
  },
  {
    label: "Governance",
    route: "/dashboard/governance/overview",
    icon: networkCentral,
    children: [
      {
        route: "/dashboard/governance/commitees",
        label: "Commitees",
      },
      {
        route: "/dashboard/governance/actions",
        label: "Action Items",
      }
    ]
  },
  {
    label: "People",
    route: "/dashboard/map",
    icon: chromosome,
    children: [
      {
        route: "/dashboard/map/latest",
        label: "Latest",
      },
      {
        route: "/dashboard/map/trusted",
        label: "Trusted",
      },
    ]
  },
]