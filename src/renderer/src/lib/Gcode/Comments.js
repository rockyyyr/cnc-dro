export const Movements = {
    'MOVEMENT_RAPID': 'Rapid',
    'MOVEMENT_LEAD_IN': 'Lead In',
    'MOVEMENT_CUTTING': 'Cutting',
    'MOVEMENT_LEAD_OUT': 'Lead Out',
    'MOVEMENT_LINK_TRANSITION': 'Link Transition',
    'MOVEMENT_LINK_DIRECT': 'Link Direct',
    'MOVEMENT_RAMP_HELIX': 'Ramp Helix',
    'MOVEMENT_RAMP_PROFILE': 'Ramp Profile',
    'MOVEMENT_RAMP_ZIG_ZAG': 'Ramp Zig Zag',
    'MOVEMENT_RAMP': 'Ramp',
    'MOVEMENT_PLUNGE': 'Plunge',
    'MOVEMENT_PREDRILL': 'Predrill',
    'MOVEMENT_EXTENDED': 'Extended',
    'MOVEMENT_REDUCED': 'Reduced',
    'MOVEMENT_HIGH_FEED': 'High Feed',
    'MOVEMENT_FINISH_CUTTING': 'Finish Cutting',
};

export const displayMovement = line => {
    const movement = line.replace(/\(|\)|\s/g, '');
    return Movements[movement] || false;
};

export const isMovement = line => line.includes('MOVEMENT_');
export const isSectionEnd = line => line.includes('*** SECTION end ***');
export const isSectionStart = line => line.includes('*** SECTION begin ***');
