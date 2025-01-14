import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/contexts/LanguageContext";

const Affiliate = () => {
  const { t } = useLanguage();

  return (
    <PageLayout title={t("affiliate")} description={t("manageAffiliate")}>
      <div className="space-y-8">
        {/* Table implementation will be added later */}
        <div>Affiliate content coming soon</div>
      </div>
    </PageLayout>
  );
};

export default Affiliate;