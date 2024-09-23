import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function EarningsPageEarningsOverview() {
  const earningsData = [
    { date: "June 15, 2023", amount: "$250.00" },
    { date: "June 10, 2023", amount: "$175.00" },
    { date: "June 5, 2023", amount: "$300.00" },
  ];
  return (
    <div>
      <section className="bg-background py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-pink-600">Earnings</h1>
              <p className="text-muted-foreground">View your earnings and recent transactions.</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-pink-600">Earnings Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <div className="text-muted-foreground">Total Earnings</div>
                    <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500">
                      $12,345.67
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="text-muted-foreground text-lg font-semibold">Recent Earnings</div>
                    <div className="grid gap-4 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
                      {earningsData.map((earning, index) => (
                        <div
                          key={index}
                          className={`flex justify-between border-b border-gray-300 dark:border-gray-600 pb-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 ${
                            index === earningsData.length - 1 ? "" : "border-b"
                          }`}>
                          <div className="text-gray-800 dark:text-gray-200">{earning.date}</div>
                          <div className="text-sky-600 font-semibold">{earning.amount}</div>
                        </div>
                      ))}
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
