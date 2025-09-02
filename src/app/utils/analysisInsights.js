// utils/analysisInsights.js

export function generateSalesInsights(data) {
  const insights = [];
  const { revenueTrend, revenueByCategory, salesByRegion, topProducts, allSalesData } = data;

  // 1. Revenue Trend Analysis
  if (revenueTrend.length > 1) {
    const latestMonth = revenueTrend[revenueTrend.length - 1];
    const previousMonth = revenueTrend[revenueTrend.length - 2];
    const revenueGrowth = ((latestMonth.totalRevenue - previousMonth.totalRevenue) / previousMonth.totalRevenue) * 100;
    
    if (revenueGrowth > 15) {
      insights.push({
        type: 'positive',
        title: 'Rapid Revenue Growth',
        message: `Revenue grew by ${revenueGrowth.toFixed(1)}% compared to last month. This exceptional growth suggests successful recent initiatives.`,
        suggestion: 'Consider increasing inventory and marketing budget to sustain this momentum.'
      });
    } else if (revenueGrowth < -10) {
      insights.push({
        type: 'negative',
        title: 'Revenue Decline Detected',
        message: `Revenue decreased by ${Math.abs(revenueGrowth).toFixed(1)}% compared to last month. This requires immediate attention.`,
        suggestion: 'Investigate recent changes in market conditions, pricing, or customer behavior.'
      });
    }
  }

  // 2. Category Performance Analysis
  const categoryPerformance = revenueByCategory.map(cat => ({
    name: cat._id,
    revenue: cat.totalRevenue,
    percentage: (cat.totalRevenue / revenueByCategory.reduce((sum, c) => sum + c.totalRevenue, 0)) * 100
  })).sort((a, b) => b.percentage - a.percentage);

  if (categoryPerformance.length > 0) {
    const topCategory = categoryPerformance[0];
    const bottomCategory = categoryPerformance[categoryPerformance.length - 1];
    
    insights.push({
      type: 'analysis',
      title: 'Category Dominance',
      message: `${topCategory.name} generates ${topCategory.percentage.toFixed(1)}% of total revenue, dominating other categories.`,
      suggestion: `Consider expanding the ${topCategory.name} product line and analyzing why ${bottomCategory.name} underperforms.`
    });
  }

  // 3. Regional Analysis
  const regionalPerformance = salesByRegion.map(region => ({
    name: region._id,
    revenue: region.totalRevenue,
    percentage: (region.totalRevenue / salesByRegion.reduce((sum, r) => sum + r.totalRevenue, 0)) * 100
  })).sort((a, b) => b.percentage - a.percentage);

  if (regionalPerformance.length > 1) {
    const topRegion = regionalPerformance[0];
    const secondRegion = regionalPerformance[1];
    const gap = topRegion.percentage - secondRegion.percentage;
    
    if (gap > 20) {
      insights.push({
        type: 'opportunity',
        title: 'Regional Market Opportunity',
        message: `${topRegion.name} generates ${gap.toFixed(1)}% more revenue than the next best region (${secondRegion.name}).`,
        suggestion: `Explore expanding marketing efforts to ${secondRegion.name} and other underperforming regions.`
      });
    }
  }

  // 4. Product Performance Analysis
  if (topProducts.length > 0) {
    const bestSeller = topProducts[0];
    const worstSeller = topProducts[topProducts.length - 1];
    const performanceGap = bestSeller.totalUnitsSold - worstSeller.totalUnitsSold;
    
    insights.push({
      type: 'analysis',
      title: 'Product Performance Gap',
      message: `"${bestSeller._id}" sells ${performanceGap.toLocaleString()} more units than the lowest performer.`,
      suggestion: `Analyze why "${worstSeller._id}" underperforms and consider promotional strategies or product improvements.`
    });
  }

  // 5. Profit Margin Analysis
  const lowMarginProducts = allSalesData.filter(product => product.profitMargin < 25);
  const highMarginProducts = allSalesData.filter(product => product.profitMargin > 50);
  
  if (lowMarginProducts.length > 0) {
    insights.push({
      type: 'warning',
      title: 'Low Margin Products',
      message: `${lowMarginProducts.length} products have profit margins below 25%.`,
      suggestion: 'Review pricing, supplier costs, or consider discontinuing low-margin products.'
    });
  }

  if (highMarginProducts.length > 0) {
    const bestMarginProduct = highMarginProducts.sort((a, b) => b.profitMargin - a.profitMargin)[0];
    insights.push({
      type: 'opportunity',
      title: 'High Margin Opportunity',
      message: `"${bestMarginProduct.product}" has an exceptional ${bestMarginProduct.profitMargin}% profit margin.`,
      suggestion: 'Consider increasing promotion and production of high-margin products.'
    });
  }

  // 6. Seasonal Pattern Detection (simple version)
  const monthlyData = revenueTrend.sort((a, b) => a._id.localeCompare(b._id));
  if (monthlyData.length >= 6) {
    const lastSixMonths = monthlyData.slice(-6);
    const avgRevenue = lastSixMonths.reduce((sum, month) => sum + month.totalRevenue, 0) / 6;
    const currentRevenue = lastSixMonths[5].totalRevenue;
    
    if (currentRevenue > avgRevenue * 1.2) {
      insights.push({
        type: 'positive',
        title: 'Seasonal Peak Detected',
        message: 'Current revenue is significantly above the 6-month average, suggesting seasonal demand.',
        suggestion: 'Plan inventory and staffing accordingly for expected continued high demand.'
      });
    }
  }

  return insights.slice(0, 5); // Return top 5 most important insights
}