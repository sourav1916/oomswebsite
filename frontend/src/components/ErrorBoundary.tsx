import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ShieldAlert, RotateCcw, Home } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
          <div className="max-w-md w-full bg-surface border border-border rounded-3xl p-8 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-rose-50 dark:bg-rose-950/30 text-rose-500 mb-6">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h1 className="font-heading font-extrabold text-2xl text-foreground mb-2">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We encountered a runtime rendering exception. Don't worry, your data and files remain fully secure on our systems.
            </p>
            
            {/* Error Message Details */}
            {this.state.error && (
              <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 text-left mb-8 border border-slate-100 dark:border-slate-900 overflow-x-auto">
                <code className="text-xs text-rose-600 dark:text-rose-400 font-mono break-all">
                  {this.state.error.message}
                </code>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={this.handleReset}
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-heading text-sm font-bold bg-primary-600 hover:bg-primary-700 text-white transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload App</span>
              </button>
              <a
                href="/"
                className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-heading text-sm font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
