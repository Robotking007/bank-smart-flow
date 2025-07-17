import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ArrowDownLeft, RefreshCw, ShoppingBag, Fuel, Coffee, Home } from "lucide-react";

interface Transaction {
  id: string;
  type: 'credit' | 'debit' | 'transfer';
  amount: number;
  description: string;
  date: string;
  category: string;
  status: 'completed' | 'pending' | 'failed';
}

interface TransactionItemProps {
  transaction: Transaction;
}

export function TransactionItem({ transaction }: TransactionItemProps) {
  const formatAmount = (amount: number, type: string) => {
    const formatted = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(Math.abs(amount));
    
    return type === 'credit' ? `+${formatted}` : `-${formatted}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getIcon = () => {
    if (transaction.type === 'credit') return <ArrowDownLeft className="h-4 w-4 text-success" />;
    if (transaction.type === 'transfer') return <RefreshCw className="h-4 w-4 text-primary" />;
    
    // Different icons for different categories
    switch (transaction.category) {
      case 'shopping': return <ShoppingBag className="h-4 w-4 text-destructive" />;
      case 'gas': return <Fuel className="h-4 w-4 text-destructive" />;
      case 'food': return <Coffee className="h-4 w-4 text-destructive" />;
      case 'utilities': return <Home className="h-4 w-4 text-destructive" />;
      default: return <ArrowUpRight className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusBadge = () => {
    switch (transaction.status) {
      case 'completed':
        return <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20">Completed</Badge>;
      case 'pending':
        return <Badge variant="secondary" className="text-xs bg-warning/10 text-warning border-warning/20">Pending</Badge>;
      case 'failed':
        return <Badge variant="destructive" className="text-xs">Failed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full bg-muted">
          {getIcon()}
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium leading-none">{transaction.description}</p>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
            {getStatusBadge()}
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-medium ${
          transaction.type === 'credit' ? 'text-success' : 'text-foreground'
        }`}>
          {formatAmount(transaction.amount, transaction.type)}
        </p>
      </div>
    </div>
  );
}