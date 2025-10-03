import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ViewReports = () => {
  // This is a placeholder page - you can add actual report data later
  const mockReports = [
    {
      id: 1,
      title: "Electricity Outage - Building A",
      location: "Building A, Floor 3",
      category: "Electricity",
      severity: "high",
      status: "pending",
      date: "2025-10-03",
    },
    {
      id: 2,
      title: "Water Leak in Cafeteria",
      location: "Main Cafeteria",
      category: "Water",
      severity: "medium",
      status: "in-progress",
      date: "2025-10-02",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Disruption Reports</h2>
        <p className="text-muted-foreground mt-2">
          View and manage all submitted disruption reports
        </p>
      </div>

      <div className="space-y-4">
        {mockReports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{report.title}</CardTitle>
                  <CardDescription>{report.location}</CardDescription>
                </div>
                <Badge variant={getSeverityColor(report.severity)}>
                  {report.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span>Category: {report.category}</span>
                <span>Status: {report.status}</span>
                <span>Date: {report.date}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;
