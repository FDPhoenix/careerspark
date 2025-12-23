import { useEffect, useState } from "react"
import PackageCard from "./card/PackageCard"
import { getPackages } from "../api/PackageApi"
import SectionTitle from "./SectionTitle"

interface Package {
  id: number
  name: string
  price: string
  jobPostLimit: number
  featuredJobLimit: number
  jobPostDuration: number
  durationDays: number | null
  description: string
  createdAt: string
}

function PricingPackages() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true)
        const data = await getPackages()
        setPackages(data)
      } catch (err) {
        setError("Failed to load packages. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchPackages()
  }, [])

  const handleAddToCart = (packageName: string) => {
    console.log(`Adding ${packageName} to cart`)
    // Add your cart logic here
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading packages...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <section className="w-full">
      <div className="w-[1320px] mx-auto">
        <SectionTitle
          title={"Pricing Packages"}
          content={"Lorem ipsum dolor sit amet elit, sed do eiusmod tempor."}
        />

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {packages
              .sort((a, b) => Number(a.price) - Number(b.price))
              .map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  name={pkg.name}
                  price={pkg.price}
                  jobPostLimit={pkg.jobPostLimit}
                  featuredJobLimit={pkg.featuredJobLimit}
                  jobPostDuration={pkg.jobPostDuration}
                  durationDays={pkg.durationDays}
                  description={pkg.description}
                  onAddToCart={() => handleAddToCart(pkg.name)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPackages