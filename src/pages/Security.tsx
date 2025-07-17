import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Shield, 
  Key, 
  Smartphone, 
  AlertTriangle, 
  CheckCircle, 
  Eye, 
  Clock, 
  Globe,
  Lock,
  Fingerprint
} from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Security</h1>
            <p className="text-muted-foreground">Protect your account with advanced security features.</p>
          </div>

          {/* Security Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-success" />
                Security Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-8 w-8 text-success" />
                  <div>
                    <h3 className="font-semibold">Your account is secure</h3>
                    <p className="text-sm text-muted-foreground">All security features are properly configured</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-success/10 text-success">
                  Excellent
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Password Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Password & Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" placeholder="Enter current password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" placeholder="Enter new password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                </div>
                
                <Button className="w-full">Update Password</Button>
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="password-expiry">Password Auto-Expiry</Label>
                  <div className="text-sm text-muted-foreground">
                    Require password change every 90 days
                  </div>
                </div>
                <Switch id="password-expiry" />
              </div>
            </CardContent>
          </Card>

          {/* Two-Factor Authentication */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Two-Factor Authentication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Two-factor authentication is enabled on your account.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-medium">Authenticator App</h4>
                      <p className="text-sm text-muted-foreground">Google Authenticator</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-success/10 text-success">Active</Badge>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Key className="h-8 w-8 text-muted-foreground" />
                    <div>
                      <h4 className="font-medium">Backup Codes</h4>
                      <p className="text-sm text-muted-foreground">Recovery codes for emergency access</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Generate New</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Biometric Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fingerprint className="h-5 w-5" />
                Biometric Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="fingerprint">Fingerprint Login</Label>
                  <div className="text-sm text-muted-foreground">
                    Use your fingerprint to sign in
                  </div>
                </div>
                <Switch id="fingerprint" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="face-id">Face Recognition</Label>
                  <div className="text-sm text-muted-foreground">
                    Use face recognition for authentication
                  </div>
                </div>
                <Switch id="face-id" />
              </div>
            </CardContent>
          </Card>

          {/* Login Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Login Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">Chrome on Windows • New York, NY</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">Now</p>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-muted-foreground">iPhone • New York, NY</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Web Browser</p>
                      <p className="text-sm text-muted-foreground">Safari on Mac • New York, NY</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                </div>
              </div>

              <Separator className="my-4" />
              
              <Button variant="outline" className="w-full">
                <Eye className="mr-2 h-4 w-4" />
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Security Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Security Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="suspicious-activity">Suspicious Activity Alerts</Label>
                  <div className="text-sm text-muted-foreground">
                    Get notified of unusual account activity
                  </div>
                </div>
                <Switch id="suspicious-activity" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="new-device">New Device Notifications</Label>
                  <div className="text-sm text-muted-foreground">
                    Alert when signing in from a new device
                  </div>
                </div>
                <Switch id="new-device" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="location-alerts">Location-based Alerts</Label>
                  <div className="text-sm text-muted-foreground">
                    Notify when accessing from unusual locations
                  </div>
                </div>
                <Switch id="location-alerts" />
              </div>
            </CardContent>
          </Card>

          {/* Emergency Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Emergency Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Use these options only if you suspect unauthorized access to your account.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground">
                  Lock Account Immediately
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  Sign Out All Devices
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  Reset All Security Settings
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Changes */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Save Security Settings</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;