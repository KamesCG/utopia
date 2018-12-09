export default [
  {
    label: "Active",
    route: "/dashboard/proposals/active",
    icon: "ios-contact-outline",
    children: [
      {
        route: "/dashboard/proposals/active/popular",
        label: "Popular",
      },
      {
        route: "/dashboard/proposals/active/upcoming",
        label: "Upcoming Votes",
      },
      {
        route: "/dashboard/proposals/active/latest",
        label: "Latest",
      },
    ]
  },
  {
    label: "Completed",
    route: "/dashboard/proposals/completed",
    icon: "ios-contact-outline",
    children: [
      {
        route: "/dashboard/proposals/completed/accepted",
        label: "Accepted",
      },
      {
        route: "/dashboard/proposals/completed/rejected",
        label: "Rejected",
      },
    ]
  },
]