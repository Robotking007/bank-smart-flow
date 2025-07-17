import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SendHorizontal, Download, QrCode, CreditCard, PiggyBank, BarChart3 } from "lucide-react";

export function QuickActions() {
  const actions = [
    { 
      icon: SendHorizontal, 
      label: "Transfer", 
      description: "Send money",
      variant: "default" as const
    },
    { 
      icon: Download, 
      label: "Deposit", 
      description: "Add funds",
      variant: "outline" as const
    },
    { 
      icon: QrCode, 
      label: "Pay", 
      description: "QR payment",
      variant: "outline" as const
    },
    { 
      icon: CreditCard, 
      label: "Cards", 
      description: "Manage cards",
      variant: "outline" as const
    },
    { 
      icon: PiggyBank, 
      label: "Save", 
      description: "Savings goals",
      variant: "outline" as const
    },
    { 
      icon: BarChart3, 
      label: "Invest", 
      description: "Portfolio",
      variant: "outline" as const
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              className="flex flex-col items-center p-4 h-auto space-y-2 hover:scale-105 transition-transform"
            >
              <action.icon className="h-6 w-6" />
              <div className="text-center">
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs text-muted-foreground">{action.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}