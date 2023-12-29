import {

  NavItemType,
} from "components/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";


const dashboardChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/dashboard",
    name: "Dashboard",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/posts",
    name: "Posts",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/edit-profile",
    name: "Edit profile",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/billing-address",
    name: "Billing address",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/subscription",
    name: "Subscription",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/submit-post",
    name: "Submit post",
  },
];

const otherPageChildMenus: NavItemType[] = [
 
 
  
  {
    id: ncNanoId(),
    href: "/dashboard",
    name: "Dashboard",
    type: "dropdown",
    children: dashboardChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

const archviePageChildrenMenus: NavItemType[] = [
  
  {
    id: ncNanoId(),
    href: "/archive-audio/the-demo-archive-slug",
    name: "Podcasts",
  },
  {
    id: ncNanoId(),
    href: "/archive-video/the-demo-archive-slug",
    name: "Video",
  },
 
 
];



const demoChildMenus: NavItemType[] = [
 
 
];

const templateChilds: NavItemType[] = [
  ...archviePageChildrenMenus
,
  {
    id: ncNanoId(),
    href: "/single-gallery/this-is-single-slug",
    name: "Photo collage",
  },
 
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
   
   
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Categories",
    type: "dropdown",
    children: templateChilds,
  },


  
  {
    id: ncNanoId(),
    href: "#",
    name: "Dashboard",
    type: "dropdown",
    children: otherPageChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  
   
  },

  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",

   
  },

];

export const NAVIGATION_SHORT_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Discover",
    type: "megaMenu",
    children: demoChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "How it works",
  },
];
