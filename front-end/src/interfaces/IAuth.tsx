export interface AuthState {
    user: string | null;
    loading: boolean;
    error: string | null;
  }
  
  export interface AuthAction {
    type: string;
    payload?: any;
  }
  