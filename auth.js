const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');
const { validate } = require('../middleware/errorHandler');
const rateLimit = require('express-rate-limit');

// Strict rate limit for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 10,
  message: { success: false, message: 'Too many attempts. Try again in 15 minutes.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// ── SIGNUP ────────────────────────────────────────────────────────────────────
router.post(
  '/signup',
  authLimiter,
  [
    body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
    body('phone').notEmpty().withMessage('Phone number required'),
    body('password')
      .isLength({ min: 8 })
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/)
      .withMessage('Password must be 8+ characters with uppercase, lowercase, and number'),
    body('first_name').trim().isLength({ min: 1 }).withMessage('First name required'),
    body('last_name').trim().isLength({ min: 1 }).withMessage('Last name required'),
    body('user_type').optional().isIn(['consumer', 'partner', 'agent']).withMessage('Invalid user type'),
  ],
  validate,
  authController.signup
);

// ── LOGIN ─────────────────────────────────────────────────────────────────────
router.post(
  '/login',
  authLimiter,
  [
    body('email').isEmail().normalizeEmail().withMessage('Valid email required'),
    body('password').notEmpty().withMessage('Password required'),
  ],
  validate,
  authController.login
);

// ── VERIFY EMAIL ──────────────────────────────────────────────────────────────
router.get('/verify-email', authController.verifyEmail);

// ── FORGOT PASSWORD ───────────────────────────────────────────────────────────
router.post(
  '/forgot-password',
  authLimiter,
  [body('email').isEmail().normalizeEmail()],
  validate,
  authController.forgotPassword
);

// ── RESET PASSWORD ────────────────────────────────────────────────────────────
router.post(
  '/reset-password',
  [
    body('token').notEmpty().withMessage('Reset token required'),
    body('new_password')
      .isLength({ min: 8 })
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/)
      .withMessage('Password must be 8+ characters with uppercase, lowercase, and number'),
  ],
  validate,
  authController.resetPassword
);

// ── RESEND VERIFICATION (requires login) ──────────────────────────────────────
router.post('/resend-verification', authenticate, authController.resendVerification);

module.exports = router;
