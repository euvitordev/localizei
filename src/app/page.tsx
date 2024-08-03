"use client"
import HistoryManager from "@/components/SearchComponent/HistoryManager"
import SearchComponent from "@/components/SearchComponent/SearchComponent"
import Sidebar from "@/components/Sidebar/SidebarComponent"

export default function Home() {
  return (
    <HistoryManager>
      {(history, setHistory, handleDeleteHistoryItem) => (
        <div className="flex h-screen bg-background dark:bg-zinc-900">
          <Sidebar history={history} onDelete={handleDeleteHistoryItem} />
          <SearchComponent setHistory={setHistory} />
        </div>
      )}
    </HistoryManager>
  )
}
