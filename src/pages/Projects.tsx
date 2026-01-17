import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Clock, 
  CheckCircle2, 
  Loader2, 
  AlertTriangle,
  FileText,
  MoreVertical,
  Trash2,
  Download,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const projects = [
  {
    id: 1,
    name: "Residential Tower - Block A",
    file: "Block_A_v3.ifc",
    status: "completed",
    floors: 12,
    type: "Residential",
    createdAt: "2 hours ago",
    lastModified: "1 hour ago",
  },
  {
    id: 2,
    name: "Commercial Complex - Phase 1",
    file: "Commercial_P1.step",
    status: "processing",
    floors: 8,
    type: "Commercial",
    createdAt: "5 hours ago",
    lastModified: "5 hours ago",
    progress: 65,
  },
  {
    id: 3,
    name: "Hospital Wing Extension",
    file: "Hospital_Wing.dxf",
    status: "completed",
    floors: 6,
    type: "Institutional",
    createdAt: "1 day ago",
    lastModified: "23 hours ago",
  },
  {
    id: 4,
    name: "Warehouse Structure",
    file: "Warehouse_01.ifc",
    status: "failed",
    floors: 1,
    type: "Industrial",
    createdAt: "2 days ago",
    lastModified: "2 days ago",
    error: "Geometry extraction failed",
  },
  {
    id: 5,
    name: "School Building - Main Block",
    file: "School_Main.pdf",
    status: "queued",
    floors: 4,
    type: "Institutional",
    createdAt: "3 hours ago",
    lastModified: "3 hours ago",
  },
];

const Projects = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-success/10 text-success border-success/20">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        );
      case "processing":
        return (
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <Loader2 className="mr-1 h-3 w-3 animate-spin" />
            Processing
          </Badge>
        );
      case "queued":
        return (
          <Badge className="bg-muted text-muted-foreground border-border">
            <Clock className="mr-1 h-3 w-3" />
            Queued
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-destructive/10 text-destructive border-destructive/20">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Projects</h1>
              <p className="text-muted-foreground">
                Manage and track your structural analysis projects
              </p>
            </div>
            <Link to="/upload">
              <Button variant="engineering">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </Link>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">All Status</Button>
              <Button variant="ghost" size="sm">Completed</Button>
              <Button variant="ghost" size="sm">Processing</Button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card-engineering rounded-xl p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg truncate">{project.name}</h3>
                      {getStatusBadge(project.status)}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {project.file}
                      </span>
                      <span>{project.floors} floors</span>
                      <span>{project.type}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {project.lastModified}
                      </span>
                    </div>
                    
                    {/* Progress Bar for Processing */}
                    {project.status === "processing" && project.progress && (
                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Analyzing structure...</span>
                          <span className="text-primary font-mono">{project.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Error Message */}
                    {project.status === "failed" && project.error && (
                      <p className="mt-2 text-sm text-destructive">{project.error}</p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.status === "completed" && (
                      <>
                        <Link to="/results">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View Results
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {project.status === "failed" && (
                      <Button variant="outline" size="sm">
                        Retry Analysis
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download Report
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (hidden when projects exist) */}
          {projects.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted mb-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
              <p className="text-muted-foreground mb-6">
                Upload your first building model to start analysis
              </p>
              <Link to="/upload">
                <Button variant="engineering">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Project
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
