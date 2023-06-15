export const menuItems = [
  {
    id: 0,
    label: "Manage Payouts",
    icon: "https://assets9.lottiefiles.com/packages/lf20_jffprore.json",
    route: "/payouts",
  },
  {
    id: 1,
    label: "Manage Quizzes",
    icon: "https://assets2.lottiefiles.com/packages/lf20_b3dRkcAO6T.json",
    route: "/manage-quizzes",
  },
  {
    id: 2,
    label: "Manage Videos",
    icon: "https://assets9.lottiefiles.com/packages/lf20_rsgxuwx0.json",
    route: "/manage-videos",
  },
  {
    id: 3,
    label: "Program Benefits",
    icon: "https://assets8.lottiefiles.com/packages/lf20_fi6lfg1v.json",
    route: "/program-benefits",
  },
  {
    id: 4,
    label: "Program Activities",
    icon: "https://assets9.lottiefiles.com/private_files/lf30_EAw45V.json",
    route: "/program-activities",
  },
  {
    id: 4,
    label: "Dashboard",
    icon: "https://assets6.lottiefiles.com/packages/lf20_ia8jpabk.json",
  },
];

//--Payouts--//

export const categories = [
  { id: "pending", title: "Pending Payments", bg: "bg-[#3A4F9B]" },
  { id: "approved", title: "Approved Payments", bg: "bg-[#33AA44]" },
  { id: "declined", title: "Declined Payments", bg: "bg-[#AA0B0B]" },
];

export const message = {
  payouts: {
    emptyRecord: `No Record Found!`,
  },
};

//--Payout Details--//

export const detailFields = [
  { id: "user", label: "User", type: "box" },
  { id: "loginId", label: "Login ID", type: "box" },
  { id: "account", label: "Account", type: "box" },
  { id: "status", label: "Status", type: "dropdown" },
  { id: "reason", label: "Reason", type: "multiline-input" },
  { id: "dateType", label: "Date Type", type: "date-picker" },
  { id: "account", label: "Account", type: "input" },
];

export const statusOptions = [
  { label: "Approved", value: "approved" },
  { label: "Declined", value: "declined" },
  { label: "Pending", value: "pending" },
];
export const defaultOption = statusOptions[0];
