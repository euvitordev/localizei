import Header from "@/components/header/header"
import PageHistory from "@/components/main/page-history"
import PagePrimary from "@/components/main/page-primary"

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-start overflow-auto bg-zinc-900 px-4 text-white max-lg:p-0">
      <Header />
      <div className="flex w-full max-lg:flex-col">
        <PagePrimary />
        <PageHistory />
      </div>
    </main>
  )
}
