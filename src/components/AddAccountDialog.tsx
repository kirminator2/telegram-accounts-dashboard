import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

const proxies = ["Proxy 1", "Proxy 2", "Proxy 3"];

export function AddAccountDialog() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedProxy, setSelectedProxy] = useState<string>("");
  const [files, setFiles] = useState<FileList | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  };

  const handleSubmit = () => {
    // Handle account creation logic here
    console.log({ selectedProject, selectedProxy, files });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          {t("addAccount")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t("addNewAccount")}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger>
              <SelectValue placeholder={t("selectProject")} />
            </SelectTrigger>
            <SelectContent>
              {["Marketing", "Sales", "Support"].map((project) => (
                <SelectItem key={project} value={project}>
                  {project}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedProxy} onValueChange={setSelectedProxy}>
            <SelectTrigger>
              <SelectValue placeholder={t("selectProxy")} />
            </SelectTrigger>
            <SelectContent>
              {proxies.map((proxy) => (
                <SelectItem key={proxy} value={proxy}>
                  {proxy}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div
            className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <input
              type="file"
              multiple
              className="hidden"
              id="file-upload"
              onChange={(e) => setFiles(e.target.files)}
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 mx-auto mb-2" />
              <p className="font-medium">{t("uploadFiles")}</p>
              <p className="text-sm text-muted-foreground">{t("dragAndDrop")}</p>
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <DialogTrigger asChild>
              <Button variant="outline">{t("cancel")}</Button>
            </DialogTrigger>
            <Button onClick={handleSubmit}>{t("create")}</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}