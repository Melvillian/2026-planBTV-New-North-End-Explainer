import { describe, expect, it } from 'vitest';

import {
  actionCategories,
  actions,
  comparisons,
  corridorPhases,
  focusAreas,
  headlineStats,
  parkImpacts,
  secondarySites,
} from './plan';

describe('plan data', () => {
  it('has five focus areas and five secondary sites', () => {
    expect(focusAreas).toHaveLength(5);
    expect(secondarySites).toHaveLength(5);
  });

  it('has unique action codes with valid categories', () => {
    const codes = actions.map((a) => a.code);
    expect(new Set(codes).size).toBe(codes.length);
    for (const action of actions) {
      expect(actionCategories).toContain(action.category);
    }
  });

  it('every focus area records both support and concerns', () => {
    for (const area of focusAreas) {
      expect(area.feedback.support.length).toBeGreaterThan(0);
      expect(area.feedback.concerns.length).toBeGreaterThan(0);
      expect(area.cite).toMatch(/\d/);
    }
  });

  it('corridor phases are numbered 1–5 in order', () => {
    expect(corridorPhases.map((p) => p.phase)).toEqual([1, 2, 3, 4, 5]);
  });

  it('comparison chart values are percentages', () => {
    for (const c of comparisons) {
      expect(c.nne).toBeGreaterThanOrEqual(0);
      expect(c.nne).toBeLessThanOrEqual(100);
      expect(c.city).toBeGreaterThanOrEqual(0);
      expect(c.city).toBeLessThanOrEqual(100);
    }
  });

  it('headline stats and park impacts are populated', () => {
    expect(headlineStats).toHaveLength(4);
    expect(parkImpacts.length).toBeGreaterThanOrEqual(9);
  });
});
