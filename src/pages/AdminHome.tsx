import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome to Admin Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Manage campus disruptions and view reports
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Report Disruption
            </CardTitle>
            <CardDescription>
              Submit a new disruption report for campus facilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={() => navigate("/admin/report-disruption")}
              className="w-full"
            >
              Create Report
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>
              View and manage submitted disruption reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              onClick={() => navigate("/admin/reports")}
              className="w-full"
            >
              View All Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminHome;
