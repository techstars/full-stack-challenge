import React from 'react';
import ErrorPage from './errorPage/errorPage'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      console.log(error.toString())
      console.log('Error Stack: ', errorInfo.componentStack)
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <ErrorPage/>
        );
      }
      return this.props.children;
    }  
  }

  export default ErrorBoundary;