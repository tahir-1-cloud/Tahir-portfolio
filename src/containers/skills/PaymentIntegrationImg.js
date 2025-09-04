import React, { Component } from "react";

export default class PaymentIntegrationImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="600"
        viewBox="0 0 800 600"
      >
        <defs>
          <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8f9fa" />
            <stop offset="100%" stopColor="#e9ecef" />
          </linearGradient>
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f1f3f5" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
            <feOffset dx="0" dy="4" result="offsetblur" />
            <feFlood floodColor="#000000" floodOpacity="0.2" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width="100%" height="100%" fill="url(#gradientBg)" />

        {/* Main Device */}
        <g filter="url(#shadow)" transform="translate(200, 100)">
          {/* Device Body */}
          <rect
            x="0"
            y="0"
            width="400"
            height="300"
            rx="15"
            fill="#fff"
            stroke="#dee2e6"
            strokeWidth="2"
          />

          {/* Screen Content */}
          <rect x="20" y="20" width="360" height="260" rx="10" fill="#f8f9fa" />

          {/* Header */}
          <rect
            x="20"
            y="20"
            width="360"
            height="40"
            rx="10"
            fill={theme.imageHighlight}
            opacity="0.8"
          />
          <text
            x="200"
            y="45"
            textAnchor="middle"
            fill="#fff"
            fontWeight="bold"
            fontSize="16"
          >
            Payment Checkout
          </text>

          {/* Payment Form */}
          <rect
            x="50"
            y="80"
            width="300"
            height="40"
            rx="5"
            fill="#fff"
            stroke="#e9ecef"
            strokeWidth="1"
          />
          <text x="65" y="105" fill="#495057" fontSize="14">
            Card Number: **** **** **** 1234
          </text>

          <g transform="translate(50, 130)">
            <rect
              x="0"
              y="0"
              width="140"
              height="40"
              rx="5"
              fill="#fff"
              stroke="#e9ecef"
              strokeWidth="1"
            />
            <text x="10" y="25" fill="#495057" fontSize="14">
              MM/YY
            </text>
          </g>

          <g transform="translate(210, 130)">
            <rect
              x="0"
              y="0"
              width="140"
              height="40"
              rx="5"
              fill="#fff"
              stroke="#e9ecef"
              strokeWidth="1"
            />
            <text x="10" y="25" fill="#495057" fontSize="14">
              CVV
            </text>
          </g>

          <rect
            x="50"
            y="190"
            width="300"
            height="40"
            rx="5"
            fill="#fff"
            stroke="#e9ecef"
            strokeWidth="1"
          />
          <text x="65" y="215" fill="#495057" fontSize="14">
            Name on Card
          </text>

          {/* Pay Button */}
          <rect
            x="50"
            y="240"
            width="300"
            height="40"
            rx="5"
            fill={theme.imageHighlight}
          />
          <text
            x="200"
            y="265"
            textAnchor="middle"
            fill="#fff"
            fontWeight="bold"
            fontSize="16"
          >
            Pay Now
          </text>
        </g>

        {/* Payment Logos */}
        <g transform="translate(150, 450)">
          {/* Stripe Logo */}
          <g transform="translate(0, 0)">
            <rect
              x="0"
              y="0"
              width="200"
              height="80"
              rx="10"
              fill="#fff"
              filter="url(#shadow)"
            />
            <text
              x="100"
              y="35"
              textAnchor="middle"
              fill="#6772e5"
              fontWeight="bold"
              fontSize="24"
            >
              Stripe
            </text>
            <text
              x="100"
              y="60"
              textAnchor="middle"
              fill="#6c757d"
              fontSize="12"
            >
              Secure Payments
            </text>
          </g>

          {/* PayPal Logo */}
          <g transform="translate(250, 0)">
            <rect
              x="0"
              y="0"
              width="200"
              height="80"
              rx="10"
              fill="#fff"
              filter="url(#shadow)"
            />
            <text
              x="100"
              y="35"
              textAnchor="middle"
              fill="#0070ba"
              fontWeight="bold"
              fontSize="24"
            >
              PayPal
            </text>
            <text
              x="100"
              y="60"
              textAnchor="middle"
              fill="#6c757d"
              fontSize="12"
            >
              Fast Checkout
            </text>
          </g>
        </g>

        {/* Security Badge */}
        <g transform="translate(600, 120)">
          <circle cx="50" cy="50" r="40" fill="#28a745" opacity="0.1" />
          <circle cx="50" cy="50" r="30" fill="#28a745" opacity="0.2" />
          <circle cx="50" cy="50" r="20" fill="#28a745" opacity="0.3" />
          <path
            d="M40,50 L47,57 L60,43"
            stroke="#fff"
            strokeWidth="3"
            fill="none"
          />
          <text
            x="50"
            y="90"
            textAnchor="middle"
            fill="#28a745"
            fontWeight="bold"
            fontSize="12"
          >
            Secure
          </text>
          <text x="50" y="105" textAnchor="middle" fill="#28a745" fontSize="10">
            SSL Encryption
          </text>
        </g>

        {/* Connection Lines */}
        <path
          d="M350,400 C350,430 300,430 300,450"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />
        <path
          d="M450,400 C450,430 500,430 500,450"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
        />

        {/* Floating Elements */}
        <circle
          cx="100"
          cy="100"
          r="15"
          fill={theme.imageHighlight}
          opacity="0.3"
        />
        <circle
          cx="700"
          cy="200"
          r="20"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
        <circle
          cx="650"
          cy="400"
          r="12"
          fill={theme.imageHighlight}
          opacity="0.4"
        />
        <circle
          cx="150"
          cy="300"
          r="18"
          fill={theme.imageHighlight}
          opacity="0.2"
        />
      </svg>
    );
  }
}
