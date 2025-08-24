#!/usr/bin/env node

/**
 * Comprehensive Accessibility and Performance Validation Script
 * 
 * This script validates:
 * 1. ARIA labels and semantic HTML structure
 * 2. Color contrast ratios (WCAG compliance)
 * 3. Keyboard navigation support
 * 4. Focus management
 * 5. Screen reader compatibility
 * 6. Performance metrics
 * 7. Loading states and error boundaries
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Color definitions from the site
const colors = {
  'tiffany-500': '#81D8D0',
  'black-900': '#0A0A0A', 
  'white-50': '#FAFAFA',
  'neutral-300': '#D4D4D8',
  'neutral-600': '#525252',
  'neutral-700': '#404040'
};

// Validation results
const results = {
  accessibility: {
    passed: [],
    warnings: [],
    errors: []
  },
  performance: {
    passed: [],
    warnings: [],
    errors: []
  },
  usability: {
    passed: [],
    warnings: [],
    errors: []
  }
};

console.log('🚀 Starting Innovation Synergy AI - Accessibility & Performance Validation\n');

// 1. Check for proper ARIA labels and semantic HTML
function validateSemanticStructure() {
  console.log('📋 Validating semantic HTML structure...');
  
  const componentFiles = [
    'components/header.tsx',
    'components/hero-section.tsx', 
    'components/pricing-section.tsx',
    'components/data-visualization-section.tsx',
    'app/layout.tsx'
  ];
  
  componentFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for ARIA labels
      const ariaPatterns = [
        /aria-label=/g,
        /aria-labelledby=/g, 
        /aria-describedby=/g,
        /role=/g,
        /aria-expanded=/g,
        /aria-controls=/g
      ];
      
      const ariaCount = ariaPatterns.reduce((count, pattern) => {
        const matches = content.match(pattern);
        return count + (matches ? matches.length : 0);
      }, 0);
      
      if (ariaCount > 0) {
        results.accessibility.passed.push(`✅ ${file}: Found ${ariaCount} ARIA attributes`);
      } else {
        results.accessibility.warnings.push(`⚠️  ${file}: No ARIA attributes found`);
      }
      
      // Check for semantic HTML elements
      const semanticElements = ['nav', 'main', 'section', 'article', 'aside', 'header', 'footer'];
      const foundSemantic = semanticElements.filter(element => 
        content.includes(`<${element}`) || content.includes(`role="${element}"`)
      );
      
      if (foundSemantic.length > 0) {
        results.accessibility.passed.push(`✅ ${file}: Uses semantic elements: ${foundSemantic.join(', ')}`);
      }
      
      // Check for alt text on images
      if (content.includes('next/image') || content.includes('<img')) {
        if (content.includes('alt=')) {
          results.accessibility.passed.push(`✅ ${file}: Images have alt text`);
        } else {
          results.accessibility.warnings.push(`⚠️  ${file}: Images may be missing alt text`);
        }
      }
    }
  });
}

// 2. Validate color contrast ratios
function validateColorContrast() {
  console.log('🎨 Validating color contrast ratios...');
  
  // Helper function to convert hex to RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  // Helper function to get luminance
  function getLuminance(hex) {
    const rgb = hexToRgb(hex);
    if (!rgb) return 0;
    
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  
  // Calculate contrast ratio
  function getContrastRatio(color1, color2) {
    const lum1 = getLuminance(color1);
    const lum2 = getLuminance(color2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }
  
  // Common color combinations to test
  const colorTests = [
    { fg: colors['white-50'], bg: colors['black-900'], desc: 'White text on black background' },
    { fg: colors['tiffany-500'], bg: colors['black-900'], desc: 'Tiffany accent on black background' },
    { fg: colors['black-900'], bg: colors['tiffany-500'], desc: 'Black text on tiffany background' },
    { fg: colors['neutral-700'], bg: colors['white-50'], desc: 'Dark gray text on white background' }
  ];
  
  colorTests.forEach(test => {
    const ratio = getContrastRatio(test.fg, test.bg);
    
    if (ratio >= 7) {
      results.accessibility.passed.push(`✅ ${test.desc}: Excellent contrast (${ratio.toFixed(2)}:1, AAA)`);
    } else if (ratio >= 4.5) {
      results.accessibility.passed.push(`✅ ${test.desc}: Good contrast (${ratio.toFixed(2)}:1, AA)`);
    } else if (ratio >= 3) {
      results.accessibility.warnings.push(`⚠️  ${test.desc}: Acceptable for large text only (${ratio.toFixed(2)}:1)`);
    } else {
      results.accessibility.errors.push(`❌ ${test.desc}: Poor contrast (${ratio.toFixed(2)}:1, fails WCAG)`);
    }
  });
}

// 3. Check for keyboard navigation support
function validateKeyboardNavigation() {
  console.log('⌨️  Validating keyboard navigation...');
  
  const componentFiles = [
    'components/header.tsx',
    'components/hero-section.tsx',
    'components/pricing-section.tsx'
  ];
  
  componentFiles.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for keyboard event handlers
      const keyboardPatterns = [
        /onKeyDown/g,
        /onKeyPress/g,
        /onKeyUp/g,
        /tabIndex/g
      ];
      
      const keyboardSupport = keyboardPatterns.some(pattern => pattern.test(content));
      
      if (keyboardSupport) {
        results.usability.passed.push(`✅ ${file}: Implements keyboard navigation`);
      }
      
      // Check for focus management
      if (content.includes('focus:') || content.includes('Focus')) {
        results.usability.passed.push(`✅ ${file}: Includes focus management`);
      }
    }
  });
}

// 4. Validate loading states and error boundaries
function validateLoadingAndErrorStates() {
  console.log('⏳ Validating loading states and error handling...');
  
  // Check if LoadingState component exists
  if (fs.existsSync('components/LoadingState.tsx')) {
    const content = fs.readFileSync('components/LoadingState.tsx', 'utf8');
    
    if (content.includes('ButtonLoadingState') && content.includes('TableLoadingState')) {
      results.usability.passed.push('✅ Comprehensive loading states implemented');
    }
    
    if (content.includes('aria-live') && content.includes('aria-label')) {
      results.accessibility.passed.push('✅ Loading states are accessible to screen readers');
    }
  }
  
  // Check if ErrorBoundary component exists  
  if (fs.existsSync('components/ErrorBoundary.tsx')) {
    const content = fs.readFileSync('components/ErrorBoundary.tsx', 'utf8');
    
    if (content.includes('componentDidCatch') && content.includes('ErrorInfo')) {
      results.usability.passed.push('✅ Error boundary properly implemented');
    }
    
    if (content.includes('role="alert"') && content.includes('aria-live')) {
      results.accessibility.passed.push('✅ Error messages are accessible');
    }
  }
}

// 5. Check accessibility utilities
function validateAccessibilityUtilities() {
  console.log('🛠️  Validating accessibility utilities...');
  
  if (fs.existsSync('lib/accessibility.ts')) {
    const content = fs.readFileSync('lib/accessibility.ts', 'utf8');
    
    const utilities = [
      'FocusManager',
      'KeyboardNavigation', 
      'AriaUtils',
      'ColorContrast',
      'ScreenReaderUtils'
    ];
    
    const implementedUtilities = utilities.filter(util => content.includes(util));
    
    if (implementedUtilities.length === utilities.length) {
      results.accessibility.passed.push('✅ All accessibility utilities implemented');
    } else {
      results.accessibility.warnings.push(`⚠️  Missing utilities: ${utilities.filter(u => !implementedUtilities.includes(u)).join(', ')}`);
    }
    
    // Check for ARIA announcement support
    if (content.includes('aria-live') && content.includes('announce')) {
      results.accessibility.passed.push('✅ Screen reader announcement system available');
    }
  }
}

// 6. Performance validation
function validatePerformance() {
  console.log('⚡ Validating performance optimizations...');
  
  // Check for Next.js Image optimization
  const componentFiles = fs.readdirSync('components').filter(file => file.endsWith('.tsx'));
  
  let nextImageUsage = 0;
  let regularImageUsage = 0;
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(path.join('components', file), 'utf8');
    
    if (content.includes('next/image')) {
      nextImageUsage++;
    }
    
    if (content.includes('<img') && !content.includes('next/image')) {
      regularImageUsage++;
    }
  });
  
  if (nextImageUsage > 0) {
    results.performance.passed.push(`✅ Using Next.js Image optimization in ${nextImageUsage} components`);
  }
  
  if (regularImageUsage > 0) {
    results.performance.warnings.push(`⚠️  Found ${regularImageUsage} regular img tags - consider Next.js Image`);
  }
  
  // Check for loading states
  const hasLoadingStates = fs.existsSync('components/LoadingState.tsx');
  if (hasLoadingStates) {
    results.performance.passed.push('✅ Loading states implemented for better perceived performance');
  }
  
  // Check bundle size from build output
  if (fs.existsSync('.next/static')) {
    results.performance.passed.push('✅ Production build generated successfully');
  }
}

// 7. Check CSS and styling accessibility
function validateCSSAccessibility() {
  console.log('🎯 Validating CSS accessibility features...');
  
  if (fs.existsSync('app/globals.css')) {
    const content = fs.readFileSync('app/globals.css', 'utf8');
    
    // Check for screen reader only styles
    if (content.includes('.sr-only')) {
      results.accessibility.passed.push('✅ Screen reader only utilities implemented');
    }
    
    // Check for reduced motion support
    if (content.includes('prefers-reduced-motion')) {
      results.accessibility.passed.push('✅ Respects user motion preferences');
    }
    
    // Check for high contrast support
    if (content.includes('prefers-contrast')) {
      results.accessibility.passed.push('✅ High contrast mode support implemented');
    }
    
    // Check for focus ring utilities
    if (content.includes('focus-ring') || content.includes('focus:ring')) {
      results.accessibility.passed.push('✅ Focus ring utilities available');
    }
  }
}

// Run all validations
async function runValidation() {
  validateSemanticStructure();
  validateColorContrast();
  validateKeyboardNavigation();
  validateLoadingAndErrorStates();
  validateAccessibilityUtilities();
  validatePerformance();
  validateCSSAccessibility();
  
  // Print results
  console.log('\n📊 VALIDATION RESULTS\n');
  
  console.log('🟢 ACCESSIBILITY PASSED:');
  results.accessibility.passed.forEach(item => console.log(`  ${item}`));
  
  if (results.accessibility.warnings.length > 0) {
    console.log('\n🟡 ACCESSIBILITY WARNINGS:');
    results.accessibility.warnings.forEach(item => console.log(`  ${item}`));
  }
  
  if (results.accessibility.errors.length > 0) {
    console.log('\n🔴 ACCESSIBILITY ERRORS:');
    results.accessibility.errors.forEach(item => console.log(`  ${item}`));
  }
  
  console.log('\n🟢 PERFORMANCE PASSED:');
  results.performance.passed.forEach(item => console.log(`  ${item}`));
  
  if (results.performance.warnings.length > 0) {
    console.log('\n🟡 PERFORMANCE WARNINGS:');
    results.performance.warnings.forEach(item => console.log(`  ${item}`));
  }
  
  console.log('\n🟢 USABILITY PASSED:');
  results.usability.passed.forEach(item => console.log(`  ${item}`));
  
  if (results.usability.warnings.length > 0) {
    console.log('\n🟡 USABILITY WARNINGS:');
    results.usability.warnings.forEach(item => console.log(`  ${item}`));
  }
  
  // Calculate scores
  const totalPassed = results.accessibility.passed.length + results.performance.passed.length + results.usability.passed.length;
  const totalWarnings = results.accessibility.warnings.length + results.performance.warnings.length + results.usability.warnings.length;
  const totalErrors = results.accessibility.errors.length + results.performance.errors.length + results.usability.errors.length;
  
  const score = Math.round((totalPassed / (totalPassed + totalWarnings + totalErrors)) * 100);
  
  console.log(`\n🏆 OVERALL SCORE: ${score}% (${totalPassed} passed, ${totalWarnings} warnings, ${totalErrors} errors)`);
  
  if (score >= 90) {
    console.log('🎉 Excellent! Your site meets high accessibility and performance standards.');
  } else if (score >= 80) {
    console.log('👍 Good! Consider addressing warnings to improve further.');
  } else {
    console.log('⚠️  Needs improvement. Please address errors and warnings.');
  }
  
  console.log('\n✅ Validation complete!\n');
}

runValidation().catch(console.error);