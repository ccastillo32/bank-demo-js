import { useEffect } from "react";
import { WelcomeTextCard } from "../../components/welcome-text-card/WelcomeTextCard";

export function Home () {
  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <div className="d-flex align-items-center page-container">
      <WelcomeTextCard />
    </div>
  )
}