import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AccountCardProps {
  accountType: string;
  accountNumber: string;
  balance: number;
  currency: string;
  isDefault?: boolean;
}

export function AccountCard({ 
  accountType, 
  accountNumber, 
  balance, 
  currency,
  isDefault = false 
}: AccountCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatAccountNumber = (number: string) => {
    return `****${number.slice(-4)}`;
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-primary-foreground/90">
          {accountType}
        </CardTitle>
        <div className="flex items-center gap-2">
          {isDefault && (
            <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
              Primary
            </Badge>
          )}
          <CreditCard className="h-4 w-4 text-primary-foreground/70" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-2xl font-bold">
              {showBalance ? formatBalance(balance) : "••••••"}
            </p>
            <p className="text-xs text-primary-foreground/70">
              {formatAccountNumber(accountNumber)}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowBalance(!showBalance)}
            className="h-8 w-8 text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10"
          >
            {showBalance ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}