/* @ds-bundle: {"format":3,"namespace":"DesignSystem_c607d8","components":[],"sourceHashes":{"ui_kits/smartlogbook/Components.jsx":"b95697af7de7","ui_kits/smartlogbook/Screens.jsx":"427c4ac20926"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_c607d8 = window.DesignSystem_c607d8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/smartlogbook/Components.jsx
try { (() => {
// SmartLogBook UI Kit — Core Components
const {
  useState
} = React;

/* ── Shared styles ── */
const btn = {
  base: {
    padding: '11px 22px',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontSize: '0.88rem',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 7,
    fontFamily: 'inherit',
    transition: '0.2s ease',
    userSelect: 'none'
  },
  primary: {
    background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
    color: 'white',
    boxShadow: '0 2px 8px rgba(59,130,246,0.3)'
  },
  success: {
    background: 'linear-gradient(135deg,#10b981,#059669)',
    color: 'white',
    boxShadow: '0 2px 8px rgba(16,185,129,0.3)'
  },
  info: {
    background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    color: 'white',
    boxShadow: '0 2px 8px rgba(99,102,241,0.3)'
  },
  secondary: {
    background: 'var(--bg-secondary)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border)'
  },
  icon: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    padding: '9px 14px',
    fontSize: '0.83rem'
  },
  danger: {
    background: '#ef4444',
    color: 'white',
    padding: '6px 12px',
    fontSize: '0.78rem',
    borderRadius: 6
  }
};
function Btn({
  variant = 'secondary',
  style,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...btn.base,
      ...btn[variant],
      ...style
    }
  }, children);
}
function Card({
  children,
  style,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-card)',
      border: `1px solid ${accent || 'var(--border)'}`,
      borderRadius: 12,
      padding: 20,
      boxShadow: accent ? `0 0 24px rgba(59,130,246,0.12)` : 'var(--shadow)',
      ...style
    }
  }, children);
}
function CardTitle({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: 600,
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, children);
}

/* ── App Header ── */
function AppHeader({
  onThemeToggle,
  theme
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-card))',
      borderBottom: '1px solid var(--border)',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, "\u2708\uFE0F ", /*#__PURE__*/React.createElement("span", null, "\u05DE\u05E0\u05D4\u05DC \u05D7\u05D1\u05E8\u05EA \u05D4\u05EA\u05E2\u05D5\u05E4\u05D4 \u05E9\u05DC\u05D9")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.76rem',
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, "\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05D8\u05D9\u05E1\u05D5\u05EA \u05DE\u05EA\u05E7\u05D3\u05DE\u05EA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onThemeToggle,
    style: {
      ...btn.base,
      ...btn.icon,
      padding: '7px 11px',
      fontSize: '1rem',
      borderRadius: 6
    }
  }, theme === 'dark' ? '🌙' : '☀️'), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn.base,
      ...btn.icon,
      padding: '7px 11px',
      fontSize: '1rem',
      borderRadius: 6
    }
  }, "\uD83D\uDD04"), /*#__PURE__*/React.createElement("button", {
    style: {
      ...btn.base,
      ...btn.icon,
      padding: '7px 11px',
      fontSize: '1rem',
      borderRadius: 6
    }
  }, "\uD83C\uDFC6"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)',
      color: 'white',
      padding: '6px 14px',
      borderRadius: 20,
      fontSize: '0.82rem',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(59,130,246,0.4)'
    }
  }, "\u05E7\u05E4\u05D8\u05DF")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-secondary)'
    }
  }, "1,840:30 \u05E9\u05E2\u05D5\u05EA")));
}

/* ── Tab Bar ── */
const TABS = [{
  key: 'dashboard',
  icon: '🏠',
  label: 'לוח בקרה'
}, {
  key: 'pricing',
  icon: '📊',
  label: 'ניתוח מחירים'
}, {
  key: 'settings',
  icon: '⚙️',
  label: 'הגדרות'
}, {
  key: 'missions',
  icon: '🎖️',
  label: 'משימות'
}, {
  key: 'rating',
  icon: '⭐',
  label: 'דירוג חברה'
}];
function TabBar({
  active,
  onSwitch
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border)',
      padding: '0 24px',
      gap: 4,
      overflowX: 'auto'
    }
  }, TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.key,
    onClick: () => onSwitch(t.key),
    style: {
      padding: '13px 18px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '0.88rem',
      fontWeight: 500,
      fontFamily: 'inherit',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      transition: '0.2s ease',
      color: active === t.key ? '#3b82f6' : 'var(--text-secondary)',
      borderBottom: active === t.key ? '3px solid #3b82f6' : '3px solid transparent'
    }
  }, t.icon, " ", t.label)));
}

/* ── Stat Card ── */
const STAT_COLORS = {
  flights: {
    bar: '#3b82f6',
    tint: 'rgba(59,130,246,.1)'
  },
  passengers: {
    bar: '#8b5cf6',
    tint: 'rgba(139,92,246,.1)'
  },
  distance: {
    bar: '#6366f1',
    tint: 'rgba(99,102,241,.1)'
  },
  hours: {
    bar: '#14b8a6',
    tint: 'rgba(20,184,166,.1)'
  },
  profit: {
    bar: '#10b981',
    tint: 'rgba(16,185,129,.1)'
  },
  fuel: {
    bar: '#f97316',
    tint: 'rgba(249,115,22,.1)'
  }
};
function StatCard({
  kind,
  emoji,
  value,
  label,
  avg,
  badge
}) {
  const c = STAT_COLORS[kind] || STAT_COLORS.flights;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg, var(--bg-card) 65%, ${c.tint} 100%)`,
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 18,
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: 4,
      background: c.bar,
      borderRadius: '0 12px 12px 0'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      background: 'rgba(0,0,0,0.25)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 20,
      fontSize: '0.65rem',
      fontWeight: 700,
      color: 'var(--text-secondary)',
      padding: '2px 7px'
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.8rem',
      marginBottom: 6
    }
  }, emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2rem',
      fontWeight: 700
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-secondary)',
      marginTop: 4
    }
  }, label), avg && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-secondary)',
      marginTop: 3
    }
  }, "\u05DE\u05DE\u05D5\u05E6\u05E2: ", avg));
}

/* ── History Item ── */
function HistoryItem({
  origin,
  dest,
  aircraft,
  nm,
  duration,
  fpm,
  pax,
  fuel,
  profit
}) {
  const pos = profit >= 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      transition: '0.2s ease',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, origin, " \u2708\uFE0F ", dest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.74rem',
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, aircraft, " \u2022 ", nm, " NM \u2022 ", duration, " \u2022 ", fpm, " FPM")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      fontSize: '0.82rem',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC65 ", pax), /*#__PURE__*/React.createElement("span", null, "\u26FD ", fuel.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: pos ? '#10b981' : '#ef4444',
      minWidth: 75,
      textAlign: 'end'
    }
  }, pos ? '+' : '', "$", Math.abs(profit).toLocaleString()));
}

/* ── Current Flight Panel ── */
function CurrentFlightPanel({
  flight,
  onConfirm
}) {
  const sections = [{
    color: '#f97316',
    icon: '💹',
    title: 'ניתוח תמחור דינמי',
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 8
      }
    }, [['💺', '$180', 'עסקי'], ['🎫', '$95', 'כלכלי'], ['📦', '$1.2/ק״ג', 'מטען'], ['⛽', '$0.85/ק״ג', 'דלק']].map(([icon, val, lbl]) => /*#__PURE__*/React.createElement("div", {
      key: lbl,
      style: {
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '10px 6px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.2rem'
      }
    }, icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1rem',
        fontWeight: 800
      }
    }, val), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '0.62rem',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, lbl))))
  }, {
    color: '#3b82f6',
    icon: '✈️',
    title: 'נתוני הטיסה',
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5,1fr)',
        gap: 8
      }
    }, [['✈️', flight.aircraft, 'מטוס'], ['📍', flight.nm + ' NM', 'מרחק'], ['⏱️', flight.duration, 'זמן'], ['👥', flight.pax, 'נוסעים'], ['⛽', flight.fuel.toLocaleString() + 'ק״ג', 'דלק']].map(([i, v, l]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '10px 6px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '1.2rem'
      }
    }, i), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '0.88rem',
        fontWeight: 700
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '0.62rem',
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, l))))
  }, {
    color: '#10b981',
    icon: '💰',
    title: 'חישוב פיננסי',
    content: /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'rgba(16,185,129,0.1)',
        border: '1px solid rgba(16,185,129,0.3)',
        borderRadius: 8,
        padding: '14px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.9rem',
        fontWeight: 600,
        color: 'var(--text-secondary)'
      }
    }, "\u05E8\u05D5\u05D5\u05D7 \u05E0\u05E7\u05D9 \u05DE\u05E9\u05D5\u05E2\u05E8"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '1.4rem',
        fontWeight: 800,
        color: '#10b981'
      }
    }, "+$", flight.profit.toLocaleString()))
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-card)',
      border: '1px solid #3b82f6',
      borderRadius: 12,
      padding: 22,
      marginBottom: 20,
      boxShadow: '0 0 24px rgba(59,130,246,0.12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.9rem',
      fontWeight: 800,
      letterSpacing: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, flight.origin), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#3b82f6'
    }
  }, "\u2708\uFE0F"), /*#__PURE__*/React.createElement("span", null, flight.dest)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.88rem',
      color: 'var(--text-secondary)',
      marginTop: 6
    }
  }, flight.originName, " \u2192 ", flight.destName), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginTop: 8,
      padding: '4px 12px',
      background: 'rgba(99,102,241,0.15)',
      border: '1px solid rgba(99,102,241,0.3)',
      borderRadius: 20,
      fontSize: '0.82rem',
      color: '#3b82f6',
      fontWeight: 600
    }
  }, flight.aircraft)), sections.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: '14px 16px',
      marginBottom: 10,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: 3,
      background: s.color,
      borderRadius: '0 8px 8px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 10,
      paddingBottom: 8,
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("span", null, s.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.6px',
      color: 'var(--text-secondary)',
      flex: 1
    }
  }, s.title), s.title.includes('תמחור') && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.68rem',
      color: '#10b981',
      fontWeight: 600,
      background: 'rgba(16,185,129,0.1)',
      border: '1px solid rgba(16,185,129,0.25)',
      borderRadius: 10,
      padding: '2px 8px'
    }
  }, "\u2705 \u05E2\u05D5\u05D3\u05DB\u05E0\u05D5")), s.content)), /*#__PURE__*/React.createElement(Btn, {
    variant: "success",
    style: {
      width: '100%',
      padding: 14,
      fontSize: '1rem',
      fontWeight: 700,
      justifyContent: 'center'
    },
    onClick: onConfirm
  }, "\uD83D\uDEEC \u05D0\u05E9\u05E8 \u05E0\u05D7\u05D9\u05EA\u05D4"));
}

/* ── Modal ── */
function Modal({
  title,
  onClose,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.72)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(4px)',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 26,
      maxWidth: 480,
      width: '100%',
      boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
      maxHeight: '90vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.15rem',
      fontWeight: 700,
      marginBottom: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, title), children));
}

/* ── Confirm Flight Modal ── */
function ConfirmModal({
  flight,
  onConfirm,
  onClose
}) {
  const [fpm, setFpm] = useState('');
  const fpmNum = parseInt(fpm) || 0;
  const rating = Math.abs(fpmNum) < 100 ? {
    cls: 'perfect',
    label: 'נחיתה מושלמת ✅',
    color: '#10b981',
    bg: 'rgba(16,185,129,0.12)'
  } : Math.abs(fpmNum) < 250 ? {
    cls: 'good',
    label: 'נחיתה טובה ✈️',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.12)'
  } : Math.abs(fpmNum) < 500 ? {
    cls: 'rough',
    label: 'נחיתה גסה ⚠️',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.12)'
  } : {
    cls: 'hard',
    label: 'נחיתה קשה 💥',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.12)'
  };
  return /*#__PURE__*/React.createElement(Modal, {
    title: "\uD83D\uDEEC \u05D0\u05D9\u05E9\u05D5\u05E8 \u05E0\u05D7\u05D9\u05EA\u05D4",
    onClose: onClose
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      fontSize: '1.1rem',
      padding: 10,
      background: 'var(--bg-secondary)',
      borderRadius: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("strong", null, flight.origin), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#3b82f6',
      fontSize: '1.3rem'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("strong", null, flight.dest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.75rem',
      color: 'var(--text-muted)',
      background: 'rgba(99,102,241,0.1)',
      padding: '2px 8px',
      borderRadius: 10
    }
  }, flight.aircraft)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: '0.83rem',
      color: 'var(--text-secondary)',
      marginBottom: 5
    }
  }, "\u05E7\u05E6\u05D1 \u05D9\u05E8\u05D9\u05D3\u05D4 (FPM):"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: fpm,
    onChange: e => setFpm(e.target.value),
    placeholder: "-145",
    style: {
      width: '100%',
      padding: '12px 16px',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      color: 'var(--text-primary)',
      fontSize: '1.4rem',
      fontWeight: 700,
      textAlign: 'center',
      fontFamily: 'inherit',
      letterSpacing: 2
    }
  })), fpm && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: 8,
      fontSize: '0.88rem',
      fontWeight: 600,
      textAlign: 'center',
      color: rating.color,
      background: rating.bg,
      border: `1px solid ${rating.color}`,
      marginBottom: 14
    }
  }, rating.label), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(16,185,129,0.1)',
      border: '1px solid rgba(16,185,129,0.3)',
      borderRadius: 8,
      padding: '12px 16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)'
    }
  }, "\u05E8\u05D5\u05D5\u05D7 \u05DE\u05E9\u05D5\u05E2\u05E8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 800,
      color: '#10b981'
    }
  }, "+$", flight.profit.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    onClick: onClose
  }, "\u05D1\u05D9\u05D8\u05D5\u05DC"), /*#__PURE__*/React.createElement(Btn, {
    variant: "success",
    onClick: () => onConfirm(fpm)
  }, "\u2705 \u05D0\u05E9\u05E8")));
}

/* ── Toast ── */
function Toast({
  msg,
  kind
}) {
  const colors = {
    success: '#10b981',
    error: '#ef4444',
    default: 'var(--border)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      bottom: 24,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--bg-card)',
      border: `1px solid ${colors[kind] || colors.default}`,
      color: kind === 'success' ? '#10b981' : kind === 'error' ? '#ef4444' : 'var(--text-primary)',
      padding: '12px 22px',
      borderRadius: 12,
      fontSize: '0.88rem',
      fontWeight: 500,
      zIndex: 9999,
      boxShadow: 'var(--shadow)',
      maxWidth: '90vw',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, msg);
}

/* ── Goal Progress ── */
function GoalItem({
  icon,
  label,
  current,
  target
}) {
  const pct = Math.min(100, Math.round(current / target * 100));
  const fillColor = pct < 60 ? '#3b82f6' : pct < 90 ? '#f59e0b' : '#10b981';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.88rem',
      fontWeight: 600
    }
  }, icon, " ", label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-secondary)'
    }
  }, current.toLocaleString(), " / ", target.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--bg-primary)',
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: fillColor,
      borderRadius: 4,
      transition: 'width 0.5s ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      textAlign: 'end'
    }
  }, pct, "%"));
}

/* ── Mission Card ── */
function MissionCard({
  title,
  desc,
  route,
  bonus,
  badge,
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-card)',
      border: `1px solid ${done ? 'var(--border)' : 'var(--border)'}`,
      borderRadius: 8,
      padding: 16,
      opacity: done ? 0.75 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 10,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: '0.95rem',
      flex: 1
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      background: done ? 'rgba(16,185,129,0.15)' : 'rgba(59,130,246,0.15)',
      color: done ? '#10b981' : '#3b82f6',
      border: `1px solid ${done ? 'rgba(16,185,129,0.3)' : 'rgba(59,130,246,0.3)'}`,
      borderRadius: 10,
      padding: '3px 9px',
      fontSize: '0.65rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      flexShrink: 0
    }
  }, done ? 'Completed' : 'Active')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-secondary)',
      marginBottom: 10,
      lineHeight: 1.4
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      color: '#3b82f6',
      fontWeight: 500,
      marginBottom: 10
    }
  }, "\u2708\uFE0F ", route), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: '10px 12px',
      background: 'rgba(59,130,246,0.05)',
      borderRadius: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 500,
      padding: '4px 8px',
      background: 'rgba(16,185,129,0.1)',
      borderRadius: 4,
      flex: 1,
      textAlign: 'center'
    }
  }, "\uD83D\uDCB0 ", bonus), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      fontWeight: 500,
      padding: '4px 8px',
      background: 'rgba(139,92,246,0.1)',
      borderRadius: 4,
      flex: 1,
      textAlign: 'center'
    }
  }, "\uD83C\uDF96\uFE0F ", badge)));
}

/* ── Rating Category Card ── */
function RatingCategory({
  emoji,
  name,
  score,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 12,
      padding: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      marginBottom: 8
    }
  }, emoji), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.9rem',
      fontWeight: 600,
      marginBottom: 4
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.8rem',
      fontWeight: 800,
      color,
      marginBottom: 6
    }
  }, score), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--bg-primary)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${score * 10}%`,
      background: color,
      borderRadius: 4
    }
  })));
}

// Export everything to window
Object.assign(window, {
  Btn,
  Card,
  CardTitle,
  AppHeader,
  TabBar,
  StatCard,
  HistoryItem,
  CurrentFlightPanel,
  Modal,
  ConfirmModal,
  Toast,
  GoalItem,
  MissionCard,
  RatingCategory
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/smartlogbook/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/smartlogbook/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// SmartLogBook UI Kit — Screen Compositions
const {
  useState,
  useEffect
} = React;

/* ── Mock data ── */
const MOCK_FLIGHT = {
  origin: 'LLBG',
  dest: 'EGLL',
  originName: 'Ben Gurion',
  destName: 'London Heathrow',
  aircraft: 'Boeing 737-800',
  nm: 2140,
  duration: '5:20',
  pax: 142,
  fuel: 8200,
  profit: 620
};
const MOCK_HISTORY = [{
  id: 1,
  origin: 'LLBG',
  dest: 'EGLL',
  aircraft: 'B738',
  nm: 2140,
  duration: '5:20',
  fpm: '-145',
  pax: 142,
  fuel: 8200,
  profit: 620
}, {
  id: 2,
  origin: 'LLBG',
  dest: 'OMDB',
  aircraft: 'A320',
  nm: 1420,
  duration: '3:10',
  fpm: '-280',
  pax: 98,
  fuel: 5100,
  profit: -120
}, {
  id: 3,
  origin: 'LLBG',
  dest: 'EDDF',
  aircraft: 'B738',
  nm: 1820,
  duration: '4:05',
  fpm: '-88',
  pax: 165,
  fuel: 6800,
  profit: 890
}, {
  id: 4,
  origin: 'LLBG',
  dest: 'LFPG',
  aircraft: 'A321',
  nm: 1940,
  duration: '4:30',
  fpm: '-205',
  pax: 187,
  fuel: 7400,
  profit: 540
}];
const MOCK_MISSIONS = [{
  title: '🎖️ שגרירות ישראל בלונדון',
  desc: 'טוס מבן גוריון ללונדון בשם משרד החוץ',
  route: 'LLBG → EGLL',
  bonus: '+$5,000',
  badge: 'שגריר',
  done: false
}, {
  title: '🌍 גשר מעל ים ערב',
  desc: 'טיסה לדובאי עם מטען הומניטרי',
  route: 'LLBG → OMDB',
  bonus: '+$3,200',
  badge: 'שליח שלום',
  done: true
}, {
  title: '🏛️ ועידת ג\'נבה',
  desc: 'הסעת משלחת דיפלומטית לשווייץ',
  route: 'LLBG → LSGG',
  bonus: '+$4,500',
  badge: 'דיפלומט',
  done: false
}, {
  title: '🎗️ עזרה הומניטרית',
  desc: 'משלוח ציוד רפואי לאתיופיה',
  route: 'LLBG → HAAB',
  bonus: '+$6,000',
  badge: 'שליח רפואי',
  done: false
}];

/* ────────────────────────────
   DASHBOARD SCREEN
──────────────────────────── */
function DashboardScreen({
  onNavigate
}) {
  const [showFlight, setShowFlight] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toast, setToast] = useState(null);
  const [history, setHistory] = useState(MOCK_HISTORY);
  const showToast = (msg, kind = 'default') => {
    setToast({
      msg,
      kind
    });
    setTimeout(() => setToast(null), 3000);
  };
  const handleConfirm = fpm => {
    const newFlight = {
      ...MOCK_FLIGHT,
      id: Date.now(),
      fpm,
      profit: MOCK_FLIGHT.profit
    };
    setHistory(h => [{
      id: Date.now(),
      origin: MOCK_FLIGHT.origin,
      dest: MOCK_FLIGHT.dest,
      aircraft: 'B738',
      nm: MOCK_FLIGHT.nm,
      duration: MOCK_FLIGHT.duration,
      fpm,
      pax: MOCK_FLIGHT.pax,
      fuel: MOCK_FLIGHT.fuel,
      profit: MOCK_FLIGHT.profit
    }, ...h]);
    setShowConfirm(false);
    setShowFlight(false);
    showToast('✅ הטיסה אושרה! רווח: $' + MOCK_FLIGHT.profit.toLocaleString(), 'success');
  };
  const stats = [{
    kind: 'flights',
    emoji: '✈️',
    value: 247,
    label: 'סה״כ טיסות',
    badge: 'A'
  }, {
    kind: 'passengers',
    emoji: '👥',
    value: '18,420',
    label: 'נוסעים',
    avg: '74',
    badge: 'B+'
  }, {
    kind: 'distance',
    emoji: '🌍',
    value: '182K',
    label: 'מרחק (NM)',
    badge: 'A'
  }, {
    kind: 'hours',
    emoji: '⏱️',
    value: '1,840:30',
    label: 'שעות טיסה',
    badge: 'A+'
  }, {
    kind: 'profit',
    emoji: '💰',
    value: '$48,200',
    label: 'רווח כולל',
    avg: '$195',
    badge: 'A'
  }, {
    kind: 'fuel',
    emoji: '⛽',
    value: '124K',
    label: 'דלק (ק״ג)',
    badge: 'B'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 20,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    onClick: () => setShowFlight(true)
  }, "\u2708\uFE0F \u05D8\u05E2\u05DF \u05D8\u05D9\u05E1\u05D4 \u05DE-SimBrief"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "icon"
  }, "\uD83D\uDCCA \u05D9\u05D9\u05E6\u05D5\u05D0 Excel"), /*#__PURE__*/React.createElement(Btn, {
    variant: "icon"
  }, "\uD83D\uDCE5 \u05D9\u05D9\u05D1\u05D5\u05D0 Excel"), /*#__PURE__*/React.createElement(Btn, {
    variant: "icon"
  }, "\uD83D\uDCC4 \u05D3\u05D5\u05D7 \u05D7\u05D5\u05D3\u05E9\u05D9"))), showFlight && /*#__PURE__*/React.createElement(CurrentFlightPanel, {
    flight: MOCK_FLIGHT,
    onConfirm: () => setShowConfirm(true)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginBottom: 20
    }
  }, stats.map(s => /*#__PURE__*/React.createElement(StatCard, _extends({
    key: s.kind
  }, s)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83C\uDFAF \u05DE\u05D8\u05E8\u05D5\u05EA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(GoalItem, {
    icon: "\u2708\uFE0F",
    label: "\u05D9\u05E2\u05D3 \u05D8\u05D9\u05E1\u05D5\u05EA",
    current: 247,
    target: 300
  }), /*#__PURE__*/React.createElement(GoalItem, {
    icon: "\u23F1\uFE0F",
    label: "\u05D9\u05E2\u05D3 \u05E9\u05E2\u05D5\u05EA \u05D8\u05D9\u05E1\u05D4",
    current: 1840,
    target: 2000
  }), /*#__PURE__*/React.createElement(GoalItem, {
    icon: "\uD83D\uDCB0",
    label: "\u05D9\u05E2\u05D3 \u05E8\u05D5\u05D5\u05D7",
    current: 48200,
    target: 100000
  }), /*#__PURE__*/React.createElement(GoalItem, {
    icon: "\uD83D\uDC65",
    label: "\u05D9\u05E2\u05D3 \u05E0\u05D5\u05E1\u05E2\u05D9\u05DD",
    current: 18420,
    target: 25000
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\u2B50 \u05E9\u05D3\u05D5\u05EA \u05DE\u05D5\u05E2\u05D3\u05E4\u05D9\u05DD"), [['LLBG', 'ישראל — בן גוריון', 42], ['EGLL', 'בריטניה — היית׳רו', 18], ['OMDB', 'איחוד האמירויות — דובאי', 12]].map(([icao, name, count]) => /*#__PURE__*/React.createElement("div", {
    key: icao,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 14px',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700
    }
  }, icao), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      color: '#3b82f6',
      fontWeight: 700
    }
  }, count, "\xD7")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83D\uDDFA\uFE0F \u05DE\u05E4\u05EA \u05DE\u05E1\u05DC\u05D5\u05DC\u05D9\u05DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      background: '#162032',
      borderRadius: 8,
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '2.5rem'
    }
  }, "\uD83D\uDDFA\uFE0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.82rem',
      color: 'var(--text-muted)'
    }
  }, "\u05D0\u05D9\u05E0\u05D8\u05E8\u05D2\u05E6\u05D9\u05D9\u05EA Leaflet.js"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.72rem',
      color: 'var(--text-muted)',
      opacity: 0.6
    }
  }, "\u05DE\u05E4\u05D4 \u05D0\u05D9\u05E0\u05D8\u05E8\u05E7\u05D8\u05D9\u05D1\u05D9\u05EA \u05D1\u05DE\u05D5\u05E6\u05E8 \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83D\uDCCB \u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D9\u05EA \u05D8\u05D9\u05E1\u05D5\u05EA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, history.slice(0, 4).map(f => /*#__PURE__*/React.createElement(HistoryItem, _extends({
    key: f.id
  }, f))))), showConfirm && /*#__PURE__*/React.createElement(ConfirmModal, {
    flight: MOCK_FLIGHT,
    onConfirm: handleConfirm,
    onClose: () => setShowConfirm(false)
  }), toast && /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    kind: toast.kind
  }));
}

/* ────────────────────────────
   PRICING SCREEN
──────────────────────────── */
function PricingScreen() {
  const [period, setPeriod] = useState(90);
  const periods = [7, 30, 90, 9999];
  const labels = {
    7: '7 ימים',
    30: '30 ימים',
    90: '90 ימים',
    9999: 'הכל'
  };
  const kpis = [{
    icon: '⛽',
    value: '$48,200',
    label: 'עלות דלק',
    color: '#3b82f6'
  }, {
    icon: '🎫',
    value: '$182,400',
    label: 'הכנסות',
    color: '#3b82f6'
  }, {
    icon: '🔧',
    value: '$24,100',
    label: 'עלויות תפעול',
    color: '#3b82f6'
  }, {
    icon: '💰',
    value: '$110,100',
    label: 'רווח נקי',
    color: '#10b981'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 700,
      marginBottom: 6
    }
  }, "\uD83D\uDCCA \u05E0\u05D9\u05EA\u05D5\u05D7 \u05E4\u05D9\u05E0\u05E0\u05E1\u05D9 \u05D1\u05D6\u05DE\u05DF \u05D0\u05DE\u05EA"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 16,
      fontSize: '0.88rem'
    }
  }, "\u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05D5\u05D4\u05DB\u05E0\u05E1\u05D5\u05EA \u05DE\u05D7\u05D5\u05E9\u05D1\u05D5\u05EA \u05DE\u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05D8\u05D9\u05E1\u05D5\u05EA \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 16
    }
  }, periods.map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => setPeriod(p),
    style: {
      flex: 1,
      padding: '8px',
      borderRadius: 8,
      border: '1px solid var(--border)',
      fontFamily: 'inherit',
      background: period === p ? '#3b82f6' : 'var(--bg-secondary)',
      color: period === p ? 'white' : 'var(--text-secondary)',
      fontSize: '0.85rem',
      fontWeight: 600,
      cursor: 'pointer',
      transition: '0.2s ease'
    }
  }, labels[p]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginBottom: 16
    }
  }, kpis.map(k => /*#__PURE__*/React.createElement("div", {
    key: k.label,
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: 16,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, k.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.4rem',
      fontWeight: 700,
      color: k.color,
      marginBottom: 4
    }
  }, k.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.8rem',
      color: 'var(--text-secondary)',
      fontWeight: 600
    }
  }, k.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, [['⛽ עלות דלק לטיסה', '#f97316'], ['💰 הכנסות לטיסה', '#10b981'], ['📈 רווח נקי לטיסה', '#3b82f6'], ['🔧 עלויות תפעול לטיסה', '#8b5cf6']].map(([title, color]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.85rem',
      fontWeight: 600,
      marginBottom: 10,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      borderRadius: 6,
      background: 'var(--bg-primary)',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '0 4px 4px',
      gap: 4
    }
  }, [60, 80, 45, 90, 70, 55, 85, 65, 95, 72, 88, 50].map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      background: color,
      borderRadius: '3px 3px 0 0',
      height: `${h}%`,
      opacity: 0.8,
      transition: 'height 0.3s ease'
    }
  })))))));
}

/* ────────────────────────────
   SETTINGS SCREEN
──────────────────────────── */
function SettingsScreen() {
  const inp = {
    width: '100%',
    padding: '10px 13px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    color: 'var(--text-primary)',
    fontSize: '0.88rem',
    fontFamily: 'inherit',
    outline: 'none'
  };
  const lbl = {
    display: 'block',
    fontSize: '0.83rem',
    color: 'var(--text-secondary)',
    marginBottom: 5,
    fontWeight: 500
  };
  const fg = {
    marginBottom: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83C\uDF10 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05DB\u05DC\u05DC\u05D9\u05D5\u05EA"), /*#__PURE__*/React.createElement("div", {
    style: fg
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u05E9\u05E4\u05D4 / Language"), /*#__PURE__*/React.createElement("select", {
    style: inp
  }, /*#__PURE__*/React.createElement("option", null, "\u05E2\u05D1\u05E8\u05D9\u05EA"), /*#__PURE__*/React.createElement("option", null, "English"))), /*#__PURE__*/React.createElement("div", {
    style: fg
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\u2708\uFE0F SimBrief User ID"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    defaultValue: "64403"
  })), /*#__PURE__*/React.createElement("div", {
    style: fg
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, "\uD83D\uDCE7 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05DC\u05D3\u05D5\u05D7\u05D5\u05EA"), /*#__PURE__*/React.createElement("input", {
    style: inp,
    placeholder: "pilot@example.com"
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83D\uDCB0 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05EA\u05DE\u05D7\u05D5\u05E8"), [['💺 כרטיס טווח קצר &lt;500NM ($)', '120'], ['💺 כרטיס טווח בינוני ($)', '220'], ['💺 כרטיס טווח ארוך ($)', '450'], ['⛽ עלות דלק ($/ק״ג)', '0.85'], ['👨‍✈️ עלות צוות ($/טיסה)', '800'], ['🔧 עלות תחזוקה ($/שעה)', '150']].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: fg
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl,
    dangerouslySetInnerHTML: {
      __html: label
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: inp,
    defaultValue: val
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary"
  }, "\uD83D\uDCBE \u05E9\u05DE\u05D5\u05E8 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA"), /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary"
  }, "\uD83D\uDD04 \u05D0\u05E4\u05E1"), /*#__PURE__*/React.createElement(Btn, {
    variant: "info"
  }, "\uD83D\uDCCA \u05E2\u05D3\u05DB\u05DF \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D3\u05D9\u05E0\u05DE\u05D9\u05D9\u05DD"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83C\uDFAF \u05DE\u05D8\u05E8\u05D5\u05EA"), [['✈️ יעד טיסות', '300'], ['⏱️ יעד שעות טיסה', '2000'], ['💰 יעד רווח ($)', '100000'], ['👥 יעד נוסעים', '25000']].map(([label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: fg
  }, /*#__PURE__*/React.createElement("label", {
    style: lbl
  }, label), /*#__PURE__*/React.createElement("input", {
    style: inp,
    defaultValue: val
  }))), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary"
  }, "\uD83D\uDCBE \u05E9\u05DE\u05D5\u05E8 \u05DE\u05D8\u05E8\u05D5\u05EA")));
}

/* ────────────────────────────
   MISSIONS SCREEN
──────────────────────────── */
function MissionsScreen() {
  const active = MOCK_MISSIONS.filter(m => !m.done);
  const completed = MOCK_MISSIONS.filter(m => m.done);
  const total = MOCK_MISSIONS.length;
  const doneCount = completed.length;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: '1.3rem',
      fontWeight: 700,
      marginBottom: 6
    }
  }, "\uD83C\uDF96\uFE0F \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      marginBottom: 16,
      fontSize: '0.88rem'
    }
  }, "\u05D4\u05E9\u05DC\u05DD \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA \u05D1\u05E9\u05DD \u05DE\u05D3\u05D9\u05E0\u05EA \u05D9\u05E9\u05E8\u05D0\u05DC \u05D5\u05E7\u05D1\u05DC \u05D1\u05D5\u05E0\u05D5\u05E1\u05D9\u05DD \u05DB\u05E1\u05E4\u05D9\u05D9\u05DD \u05D5\u05D3\u05E8\u05D2\u05D5\u05EA!"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: '12px 16px',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.82rem',
      color: 'var(--text-secondary)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, doneCount, " / ", total)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: 'var(--border)',
      borderRadius: 4,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${doneCount / total * 100}%`,
      background: 'linear-gradient(90deg,#10b981,#3b82f6)',
      borderRadius: 4
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83D\uDCCB \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: 14
    }
  }, active.map((m, i) => /*#__PURE__*/React.createElement(MissionCard, _extends({
    key: i
  }, m))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\u2705 \u05DE\u05E9\u05D9\u05DE\u05D5\u05EA \u05E9\u05D4\u05D5\u05E9\u05DC\u05DE\u05D5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
      gap: 14
    }
  }, completed.map((m, i) => /*#__PURE__*/React.createElement(MissionCard, _extends({
    key: i
  }, m))))));
}

/* ────────────────────────────
   RATING SCREEN
──────────────────────────── */
function RatingScreen() {
  const categories = [{
    emoji: '✈️',
    name: 'ביצועי טיסה',
    score: 8.4,
    color: '#3b82f6'
  }, {
    emoji: '💰',
    name: 'ביצועים פיננסיים',
    score: 7.2,
    color: '#10b981'
  }, {
    emoji: '👥',
    name: 'שירות נוסעים',
    score: 9.1,
    color: '#8b5cf6'
  }, {
    emoji: '⛽',
    name: 'יעילות דלק',
    score: 6.8,
    color: '#f97316'
  }, {
    emoji: '🛬',
    name: 'איכות נחיתות',
    score: 8.7,
    color: '#14b8a6'
  }, {
    emoji: '🎖️',
    name: 'ביצוע משימות',
    score: 5.5,
    color: '#f59e0b'
  }];
  const overallScore = (categories.reduce((s, c) => s + c.score, 0) / categories.length).toFixed(1);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,var(--bg-secondary),rgba(59,130,246,0.08))',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: 40,
      textAlign: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      fontWeight: 800,
      background: 'linear-gradient(135deg,#f59e0b,#f97316)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      lineHeight: 1.1
    }
  }, overallScore), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      letterSpacing: 4,
      margin: '8px 0'
    }
  }, '⭐'.repeat(Math.round(Number(overallScore) / 2))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: 'var(--text-secondary)'
    }
  }, "\u05D7\u05D1\u05E8\u05EA \u05EA\u05E2\u05D5\u05E4\u05D4 \u05DE\u05E6\u05D5\u05D9\u05E0\u05EA")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginBottom: 24
    }
  }, categories.map(c => /*#__PURE__*/React.createElement(RatingCategory, _extends({
    key: c.name
  }, c)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83D\uDCCA \u05E4\u05D9\u05E8\u05D5\u05D8 \u05DE\u05D3\u05D3\u05D9\u05DD"), [['ממוצע FPM נחיתות', '-182', 'high'], ['אחוז נחיתות טובות', '78%', 'mid'], ['ממוצע ניצולת נוסעים', '74%', 'mid'], ['ממוצע רווח לטיסה', '$195', 'high'], ['יחס עלות/הכנסה', '0.74', 'high'], ['שיעור השלמת משימות', '28%', 'low']].map(([name, val, tier]) => {
    const scoreColor = tier === 'high' ? '#10b981' : tier === 'mid' ? '#f59e0b' : '#ef4444';
    const scoreBg = tier === 'high' ? 'rgba(16,185,129,0.15)' : tier === 'mid' ? 'rgba(245,158,11,0.15)' : 'rgba(239,68,68,0.15)';
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }
    }, name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, val), /*#__PURE__*/React.createElement("span", {
      style: {
        background: scoreBg,
        color: scoreColor,
        fontSize: '0.78rem',
        padding: '2px 8px',
        borderRadius: 12,
        fontWeight: 600
      }
    }, tier)));
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardTitle, null, "\uD83D\uDCA1 \u05D8\u05D9\u05E4\u05D9\u05DD \u05DC\u05E9\u05D9\u05E4\u05D5\u05E8"), [['🎖️', 'השלם עוד 13 משימות כדי לשפר את ציון המשימות'], ['⛽', 'הפחת את צריכת הדלק לטיסה בממוצע של 5%'], ['🛬', 'שאף לנחיתות מתחת ל-200 FPM לציון מושלם']].map(([icon, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: 12,
      background: 'rgba(59,130,246,0.08)',
      borderRadius: 8,
      marginBottom: 8,
      borderRight: '3px solid #3b82f6'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      lineHeight: 1.5
    }
  }, text)))));
}

// Export screens
Object.assign(window, {
  DashboardScreen,
  PricingScreen,
  SettingsScreen,
  MissionsScreen,
  RatingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/smartlogbook/Screens.jsx", error: String((e && e.message) || e) }); }

})();
