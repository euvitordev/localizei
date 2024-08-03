import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"

interface PopupProps {
  visible: boolean
}
export default function Popup({ visible }: PopupProps) {
  return visible ? (
    <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
      <Card className="rounded-3xl shadow-2xl shadow-foreground/5">
        <CardHeader />
        <CardContent>
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-t-4 border-t-transparent border-blue-500 rounded-full animate-spin" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-base font-bold">Buscando localização...</h2>
          <p className="text-xs text-foreground/40">
            Aguarde enquanto buscamos sua localização atual.
          </p>
        </CardFooter>
      </Card>
    </div>
  ) : null
}
