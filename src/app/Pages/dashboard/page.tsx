import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Icon from "@/components/component/Icon";
import { MainYourTask } from "@/components/component/page/MainYourTask";
export default function DashboardPage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="hover:bg-sky-600/10">
                <CardHeader className="flex items-center justify-between">
                  <div className="text-lg font-bold text-pink-600">Total Tasks</div>
                  <Icon iconType="list" className="h-6 w-6 text-pink-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center text-sky-600">42</div>
                </CardContent>
              </Card>
              <Card className="hover:bg-green-600/10">
                <CardHeader className="flex items-center justify-between">
                  <div className="text-lg font-medium text-pink-600">Completed Tasks</div>
                  <Icon iconType="circleCheck" className="h-6 w-6 text-muted-foreground text-pink-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center text-green-600">25</div>
                </CardContent>
              </Card>
              <Card className="hover:bg-yellow-600/10">
                <CardHeader className="flex items-center justify-between">
                  <div className="text-lg font-medium text-pink-600">Pending Tasks</div>
                  <Icon iconType="clock" className="h-6 w-6 text-muted-foreground text-pink-300" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center text-yellow-600">17</div>
                </CardContent>
              </Card>
            </div>
            <MainYourTask />
          </div>
        </div>
      </section>
    </div>
  );
}
