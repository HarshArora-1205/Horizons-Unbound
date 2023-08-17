import Tech from "./(home)/Tech";
import Travel from "./(home)/Travel";
import Trending from "./(home)/Trending";
import Other from "./(shared)/Other";

export default function Home() {
  return (
    <main className="leading-7 px-10">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          Tech
          Travel
          Other
          <div className="hidden md:block">
            Subscribe
            {/* <Subscribe /> */}
          </div>
        </div>
        <div className="basis-1/4">
          Sidebar
          {/* <Sidebar /> */}
        </div>
      </div>
    </main>
  )
}
