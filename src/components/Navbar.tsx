import { visibleRoutes } from "../routes";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-end items-center">
      <ul className="flex space-x-4">
        {visibleRoutes.map((route) => (
          <div key={route.path}>
            <Button
              variant="ghost"
              onClick={() => navigate(route.path)}
              className="text-foreground hover:text-primary-200 transition-colors"
            >
              {route.label}
            </Button>
          </div>
        ))}
        <ModeToggle />
      </ul>
    </nav>
  );
};
