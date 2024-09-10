import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function EarningsPageEarningsOverview() {
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Earnings</h1>
              <p className="text-muted-foreground">View your earnings and recent transactions.</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <div className="text-muted-foreground">Total Earnings</div>
                    <div className="text-4xl font-bold">$12,345.67</div>
                  </div>
                  <div className="grid gap-2">
                    <div className="text-muted-foreground">Recent Earnings</div>
                    <div className="grid gap-2">
                      <div className="flex justify-between">
                        <div>June 15, 2023</div>
                        <div>$250.00</div>
                      </div>
                      <div className="flex justify-between">
                        <div>June 10, 2023</div>
                        <div>$175.00</div>
                      </div>
                      <div className="flex justify-between">
                        <div>June 5, 2023</div>
                        <div>$300.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
