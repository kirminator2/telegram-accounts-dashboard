import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Parsing = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("parsing")} description={t("manageParsing")}>
      <div className="space-y-8">
        {/* Parsing content will be added later */}
        <div>Parsing content coming soon</div>
      </div>
    </PageLayout>
  );
};

export default Parsing;