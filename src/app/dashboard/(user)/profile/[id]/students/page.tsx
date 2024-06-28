'use client';
import { useState, useMemo } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const students = [
  {
    id: 1,
    name: "John Doe",
    section: "A",
    materia: "Math",
    level: "Beginner",
  },
  {
    id: 2,
    name: "Jane Smith",
    section: "B",
    materia: "English",
    level: "Intermediate",
  },
  {
    id: 3,
    name: "Michael Johnson",
    section: "A",
    materia: "Science",
    level: "Advanced",
  },
  {
    id: 4,
    name: "Emily Davis",
    section: "C",
    materia: "Math",
    level: "Beginner",
  },
  {
    id: 5,
    name: "David Wilson",
    section: "B",
    materia: "History",
    level: "Intermediate",
  },
  {
    id: 6,
    name: "Sarah Lee",
    section: "A",
    materia: "English",
    level: "Advanced",
  },
  {
    id: 7,
    name: "Tom Brown",
    section: "C",
    materia: "Science",
    level: "Beginner",
  },
  {
    id: 8,
    name: "Olivia Martinez",
    section: "B",
    materia: "Math",
    level: "Intermediate",
  },
];

export default function StudentsPage() {
  const [filters, setFilters] = useState({
    section: "all",
    materia: "all",
    level: "all",
  });
  
  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      return (
        (filters.section === "all" || student.section === filters.section) &&
        (filters.materia === "all" || student.materia === filters.materia) &&
        (filters.level === "all" || student.level === filters.level)
      );
    });
  }, [filters]);
  const handleFilterChange = (field: string, value: string) => {    
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-6 pt-4 md:pt-6 ">
      <div className="flex flex-wrap md:flex-row items-center md:items-center gap-4 md:gap-6">
        <div className="flex items-center gap-2">
          <Label className="w-16" htmlFor="section">
            Section:
          </Label>
          <Select
            name="section"
            value={filters.section}
            onValueChange={(value) => handleFilterChange("section", value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-16" htmlFor="materia">
            Materia:
          </Label>
          <Select
            name="materia"
            value={filters.materia}
            onValueChange={(value) => handleFilterChange("materia", value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Math">Math</SelectItem>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="History">History</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Label className="w-16" htmlFor="level">
            Level:
          </Label>
          <Select
            name="level"
            value={filters.level}
            onValueChange={(value) => handleFilterChange("level", value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="overflow-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Section</TableHead>
              <TableHead>Materia</TableHead>
              <TableHead>Level</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.section}</TableCell>
                <TableCell>{student.materia}</TableCell>
                <TableCell>{student.level}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
