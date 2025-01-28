import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
    return { hasError: true };
    }

    componentDidCatch(error, info) {
    console.error(error, info);
    }

    render() {
    if (this.state.hasError) {
        return <h1>Une erreur est survenue.</h1>;
    }

    return this.props.children;
    }
}

export default ErrorBoundary;
