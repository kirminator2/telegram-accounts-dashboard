import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Statistics = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("statistics")} description={t("viewStatistics")}>
      <div className="space-y-8">
        {/* Statistics content will be added later */}
        <div>Statistics content coming soon</div>
      </div>
    </PageLayout>
  );
};

export default Statistics;