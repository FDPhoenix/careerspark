import DownloadAppSection from "./DownloadAppSection"
import FeaturedJobs from "./FeaturedJobs"
import HireTalentSection from "./HireTalentSection"
import JobFindingSteps from "./JobFindingSteps"
import PopularCategories from "./PopularCategories"
import PricingPackages from "./PricingPackages"
import TrustedBySection from "./TrustedBySection"

function Main() {
  return (
    <div>
        <PopularCategories />
        <JobFindingSteps />
        <HireTalentSection />
        <FeaturedJobs />
        <DownloadAppSection />
        <PricingPackages />
        <TrustedBySection />
    </div>
  )
}

export default Main