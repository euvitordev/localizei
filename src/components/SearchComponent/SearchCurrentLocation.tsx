import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "../ui/button"
import { MapPin } from "lucide-react"

interface SearchCurrentLocationProps {
  handleGetLocation: () => void
}
export function SearchCurrentLocation({
  handleGetLocation,
}: SearchCurrentLocationProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            onClick={handleGetLocation}
            variant={"default"}
            className="rounded-full hover:bg-foreground/50 size-16 hover:rounded-3xl transition-all delay-75 duration-300"
          >
            <MapPin size={32} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="max-md:mx-2">
          <p>Encontrar minha localização atual</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
