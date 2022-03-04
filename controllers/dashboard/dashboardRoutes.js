const router = require('express').Router();
const withAuth = require('../../utils/auth');

// render the dashboard page
router.get('/', withAuth, async (req,res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
