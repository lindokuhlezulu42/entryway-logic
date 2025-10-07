import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Schedule = () => {
  const timetableData = [
    {
      time: "09:00",
      monday: "1HIS3 · PRE1 · STEL",
      tuesday: "1PED3 · HALL MADO",
      wednesday: "1IRI3 · 11 · ENGM",
      thursday: "1WEL3 13 RYAD",
      friday: "1BUS3 · 13 · MCMM",
    },
    {
      time: "09:40",
      monday: "1MAT3 · 8· HALL",
      tuesday: "1PED3 · HALL MADO",
      wednesday: "1HIS3 · PRE1 · STEL",
      thursday: "1GEO3 3 DOWJ",
      friday: "1MAT3 · 8 · HALL",
    },
    {
      time: "10:20",
      monday: "1FRE3 · COMP1 · FINA",
      tuesday: "1REL3 · 12 · STOM",
      wednesday: "1MAT3 · 8 · HALL",
      thursday: "1IRI3 · 11 · ENGM",
      friday: "1ENG3 · 11 · RYAB",
    },
    {
      time: "11:00",
      monday: "BREAK",
      tuesday: "BREAK",
      wednesday: "BREAK",
      thursday: "BREAK",
      friday: "BREAK",
    },
    {
      time: "11:15",
      monday: "1BUS3 · 13 · MCMM",
      tuesday: "1ENG3 · 11 · RYAB",
      wednesday: "1SCI3 · LAB1 · RYAF",
      thursday: "1ENG3 · 11 · RYAB",
      friday: "1GEO3 · 3 · DOWJ",
    },
    {
      time: "11:55",
      monday: "1TEC3 · TECH · GILJ",
      tuesday: "1IRI3 · 11 · ENGM",
      wednesday: "1CSP3 · PRE2 · RYAB",
      thursday: "1SCI3 · LAB1 · RYAF",
      friday: "1HIS3 · 1 · STEL",
    },
    {
      time: "12:35",
      monday: "1TEC3 · TECH · GILJ",
      tuesday: "1MAT3 · 8 · HALL",
      wednesday: "1SPH3 · PRE3 · DEVP",
      thursday: "1SCI3 · LAB1 · RYAF",
      friday: "1FRE3 · COMP1 · FINA",
    },
    {
      time: "13:15",
      monday: "LUNCH",
      tuesday: "LUNCH",
      wednesday: "LUNCH",
      thursday: "LUNCH",
      friday: "",
    },
    {
      time: "14:00",
      monday: "1ENG3 · 11 · RYAB",
      tuesday: "1GEO3 · 3 · DOWJ",
      wednesday: "1FRE3 · COMP1 · FINA",
      thursday: "1TEC3 · TECH · GILJ",
      friday: "",
    },
    {
      time: "14:40",
      monday: "1IRI3 · 11 · ENGM",
      tuesday: "1FRE3 · PRE2 · MOOK",
      wednesday: "1ENG3 · 11 · RYAB",
      thursday: "1TEC3 · TECH · GILJ",
      friday: "",
    },
    {
      time: "15:20",
      monday: "1SCI3 · LAB2 · RYAF",
      tuesday: "1BUS3 · 7 · MCMM",
      wednesday: "1MAT3 · 8· HALL",
      thursday: "1ART3 6 KEYM",
      friday: "",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Schedule</h2>
        <p className="text-muted-foreground mt-2">Weekly timetable overview</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Timetable</CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24 font-bold">Time</TableHead>
                <TableHead className="font-bold">Monday</TableHead>
                <TableHead className="font-bold">Tuesday</TableHead>
                <TableHead className="font-bold">Wednesday</TableHead>
                <TableHead className="font-bold">Thursday</TableHead>
                <TableHead className="font-bold">Friday</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timetableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-semibold bg-muted">{row.time}</TableCell>
                  <TableCell className={row.monday === "BREAK" || row.monday === "LUNCH" ? "bg-muted/50 text-center font-medium" : ""}>
                    {row.monday}
                  </TableCell>
                  <TableCell className={row.tuesday === "BREAK" || row.tuesday === "LUNCH" ? "bg-muted/50 text-center font-medium" : ""}>
                    {row.tuesday}
                  </TableCell>
                  <TableCell className={row.wednesday === "BREAK" || row.wednesday === "LUNCH" ? "bg-muted/50 text-center font-medium" : ""}>
                    {row.wednesday}
                  </TableCell>
                  <TableCell className={row.thursday === "BREAK" || row.thursday === "LUNCH" ? "bg-muted/50 text-center font-medium" : ""}>
                    {row.thursday}
                  </TableCell>
                  <TableCell className={row.friday === "BREAK" || row.friday === "LUNCH" ? "bg-muted/50 text-center font-medium" : ""}>
                    {row.friday}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Schedule;
