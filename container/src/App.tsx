import React, { Suspense, lazy } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';

// Lazy load federated components with proper typing
const Remote1Component = lazy(() => import('remote1/RemoteComponent'));

const Remote2Component = lazy(() => import('remote2/RemoteComponent'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold text-foreground">Container App</h1>
            <p className="text-muted-foreground">Module Federation Demo</p>
          </div>
        </header>

        <nav className="border-b bg-muted/50">
          <div className="container mx-auto px-4 py-2">
            <div className="flex space-x-4">
              <Link to="/" className="text-foreground hover:text-primary">
                <Button variant="ghost">Home</Button>
              </Link>
              <Link to="/remote1" className="text-foreground hover:text-primary">
                <Button variant="ghost">Remote 1</Button>
              </Link>
              <Link to="/remote2" className="text-foreground hover:text-primary">
                <Button variant="ghost">Remote 2</Button>
              </Link>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Welcome to Module Federation</CardTitle>
                    <CardDescription>
                      This container app consumes components from two remote repositories
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Navigate to the remote pages to see federated components in action.
                      Any changes in the remote repositories will be reflected here in real-time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            } />

            <Route path="/remote1" element={
              <ErrorBoundary fallback={
                <Card>
                  <CardContent className="pt-6 text-destructive">Failed to load Remote 1.</CardContent>
                </Card>
              }>
                <Suspense fallback={
                  <Card>
                    <CardContent className="pt-6">
                      <div className="animate-pulse">
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                }>
                  <Remote1Component />
                </Suspense>
              </ErrorBoundary>
            } />

            <Route path="/remote2" element={
              <ErrorBoundary fallback={
                <Card>
                  <CardContent className="pt-6 text-destructive">Failed to load Remote 2.</CardContent>
                </Card>
              }>
                <Suspense fallback={
                  <Card>
                    <CardContent className="pt-6">
                      <div className="animate-pulse">
                        <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                      </div>
                    </CardContent>
                  </Card>
                }>
                  <Remote2Component />
                </Suspense>
              </ErrorBoundary>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
