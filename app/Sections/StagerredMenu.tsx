"use client";
import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "#hero" },
  { label: "About", ariaLabel: "Learn about us", link: "#team" },
  { label: "Services", ariaLabel: "View our services", link: "#services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const socialItems = [
  {
    label: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61578833769304",
  },
  { label: "Instagram", link: "https://www.instagram.com/xperience.proydrs/" },
  {
    label: "Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=xpdigital.dev@gmail.com",
  },
];

export default function StaggerredMenu() {
  return (
    <div className="navbar h-auto fixed top-0 left-0 w-full pointer-events-none z-20">
      <div className="pointer-events-auto">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials={true}
          displayItemNumbering={true}
          menuButtonColor="#fff"
          openMenuButtonColor="#000"
          changeMenuColorOnOpen={true}
          colors={["#B19EEF", "#5227FF"]}
          logoUrl="/Light.png"
          leftLogoUrl="/Dark.png"
          accentColor="#ff6b6b"
          isFixed={true}
          onMenuOpen={() => {}}
          onMenuClose={() => {}}
          className="relative"
        />
      </div>
    </div>
  );
}
