import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Icon from "@/components/component/Icon";
import { MainYourTaskSM } from "@/components/component/page/MainYourTaskSM";

export default function DashboardPage() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="text-lg font-medium">Total Tasks</div>
                  <Icon iconType="list" className="h-6 w-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center">42</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="text-lg font-medium">Completed Tasks</div>
                  <Icon iconType="circleCheck" className="h-6 w-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center">25</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="text-lg font-medium">Pending Tasks</div>
                  <Icon iconType="clock" className="h-6 w-6 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-center">17</div>
                </CardContent>
              </Card>
            </div>
            <MainYourTaskSM />
          </div>
        </div>
      </section>
    </div>
  );
}
