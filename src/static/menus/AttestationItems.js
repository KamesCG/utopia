export default [
  {
    label: "Trust Anchors",
    route: "/dashboard/attestations/trust-anchors",
    icon: "ios-contact-outline",
    children: [
      {
        route: "/dashboard/attestations/trust-anchors/list",
        label: "List",
      },
      {
        route: "/dashboard/attestations/trust-anchors/manage",
        label: "Manage",
      },
    ]
  },
  {
    label: "Manage",
    route: "/dashboard/attestations/manage",
    icon: "ios-contact-outline",
    children: [
      {
        route: "/dashboard/attestations/manage/overview",
        label: "Overview",
      },
      {
        route: "/dashboard/attestations/manage/links",
        label: "Links",
      },
    ]
  },
]