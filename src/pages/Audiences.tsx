import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Audiences = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("audiences")} description={t("manageAudiences")}>
      <div className="space-y-8">
        {/* Table implementation will be added later */}
        <div>Audiences content coming soon</div>
      </div>
    </PageLayout>
  );
};

export default Audiences;