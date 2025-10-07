import SignInForm from "@/components/SignInForm";
import RoleSelector from "@/components/RoleSelector";
import tutLogo from "@/assets/TUT.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-3">
            <img 
              src={tutLogo} 
              alt="Tshwane University of Technology" 
              className="h-24 md:h-32 w-auto"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent leading-tight pb-2">
            e-LibraryLog
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Smarter Scheduling, Better Balance
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-12">
          {/* Sign In Form */}
          <div className="w-full lg:w-auto flex justify-center">
            <SignInForm />
          </div>

          {/* Divider */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="h-96 w-px bg-border"></div>
          </div>

          <div className="lg:hidden w-full">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>
          </div>

          {/* Role Selector */}
          <div className="w-full lg:w-auto flex justify-center items-center">
            <RoleSelector />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground animate-fade-in">
          <p>© 2025 Tshwane University of Technology - We empower people</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
