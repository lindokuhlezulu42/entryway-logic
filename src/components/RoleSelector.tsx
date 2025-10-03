import { Button } from "@/components/ui/button";
import { GraduationCap, Shield } from "lucide-react";

const RoleSelector = () => {
  const handleStudentClick = () => {
    window.location.href = "https://lovable.dev/projects/638882c7-8328-43ab-b1fd-f4594ed31458";
  };

  const handleAdminClick = () => {
    window.location.href = "https://lovable.dev/projects/c9746c97-f16e-4d46-892b-c0b723155e43";
  };

  return (
    <div className="w-full max-w-md space-y-4 animate-fade-in">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Quick Access</h3>
        <p className="text-sm text-muted-foreground">
          Choose your role to continue
        </p>
      </div>
      <div className="grid gap-3">
        <Button
          variant="student"
          size="lg"
          onClick={handleStudentClick}
          className="w-full h-14 text-base font-semibold group"
        >
          <GraduationCap className="h-5 w-5 transition-transform group-hover:scale-110" />
          Continue as Student Assistant
        </Button>
        <Button
          variant="admin"
          size="lg"
          onClick={handleAdminClick}
          className="w-full h-14 text-base font-semibold group"
        >
          <Shield className="h-5 w-5 transition-transform group-hover:scale-110" />
          Continue as Admin
        </Button>
      </div>
    </div>
  );
};

export default RoleSelector;
