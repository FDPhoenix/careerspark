import CategoryCard from "./card/CategoryCard"
import SectionTitle from "./SectionTitle"

function PopularCategories() {
  const categories = [
    {
      id: 1,
      name: "Accounting / Finance",
      iconUrl: "flaticon-money",
      openPosition: 1
    },

    {
      id: 2,
      name: "Marketing",
      iconUrl: "flaticon-megaphone",
      openPosition: 5
    },

    {
      id: 3,
      name: "Design",
      iconUrl: "flaticon-vector",
      openPosition: 7
    },

    {
      id: 4,
      name: "Development",
      iconUrl: "flaticon-web-programming",
      openPosition: 6
    },

    {
      id: 5,
      name: "Project Management",
      iconUrl: "flaticon-start",
      openPosition: 1
    },

    {
      id: 6,
      name: "Customer Service",
      iconUrl: "flaticon-support",
      openPosition: 4
    },

    {
      id: 7,
      name: "Health and Care",
      iconUrl: "flaticon-first-aid-kit",
      openPosition: 3
    },

    {
      id: 8,
      name: "Automotive Jobs",
      iconUrl: "flaticon-car",
      openPosition: 1
    },
  ]

  return (
    <section className="w-full">
      <div className="w-[1320px] flex justify-center mx-auto">
        <div className="w-full">
          <SectionTitle
            title={"Popular Job Categories"}
            content={"2000 jobs live – 293 added today."}
          />

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {
                categories.map((cat) => (
                  <CategoryCard
                    key={cat.id}
                    name={cat.name}
                    iconUrl={cat.iconUrl}
                    openPosition={cat.openPosition}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularCategories