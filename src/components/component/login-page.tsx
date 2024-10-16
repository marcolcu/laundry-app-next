import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LoginPage() {
  return (
    <Card className="mx-auto py-auto max-w-sm rounded-lg shadow-md">
      <CardHeader className="space-y-1 p-6">
        <CardTitle className="text-2xl font-bold">Hai👋🏻!</CardTitle>
        <CardDescription>Cucian kamu banyak? Yukk login atau buat akun dulu.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Masukkan email kamu</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Passwordnya jangan lupa yaa!</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </CardContent>
      <CardFooter className="p-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Belum punya akun?{" "}
          <Link href="/register" className="underline" prefetch={false}>
            Bikin disini yaa
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
