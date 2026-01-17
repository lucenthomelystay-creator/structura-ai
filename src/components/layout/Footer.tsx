import { Box } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Box className="h-4 w-4 text-primary" />
              </div>
              <span className="font-bold">StructurAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Open-source structural analysis platform for engineers.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/upload" className="hover:text-primary transition-colors">New Analysis</Link></li>
              <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Examples</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">IS Codes Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Open Source</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contributing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 StructurAI. Open source under MIT License.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
