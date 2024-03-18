const express = require("express");
const router = express.Router();

const { Member } = require('../models');
const { createMemberForm } = require('../forms');
const dataLayer = require('../dal/members');
const serviceLayer = require('../services/members');

router.get('/', async(req,res)=>{
    const allMembers = await dataLayer.getAllMembers();
    res.json({
        'members': allMembers.toJSON()
    });
});

router.get('/:member_id', async(req,res)=>{
    const memberId = req.params.member_id;
    const member = await dataLayer.getMemberByID(memberId);
    res.json({
        'member': member.toJSON()
    });
});

router.post('/', async (req, res) => {
    
    const memberForm = createMemberForm();

    memberForm.handle(req, {
        'success': async (form) => {                    
            let { ...memberData } = form.data;
            const member = new Member(memberData);
            await member.save();
    
            res.json({
                'member': member.toJSON()
            });
        },
        'error': async (form) => {
           let errors = {};
           for (let key in form.fields) {
               if (form.fields[key].error) {
                   errors[key] = form.fields[key].error;
               }
           }
           res.send(JSON.stringify(errors));
        }
    });
});

router.put('/:member_id', async(req,res)=>{
    
    const memberForm = createMemberForm();
    
    const memberId = req.params.member_id;
    const member = await dataLayer.getMemberByID(memberId);
    
    memberForm.handle(req, {
        "success": async function(form) {
            let {...memberData} = form.data;
            member.set(memberData);
            await member.save();

            res.json({
                'member': member.toJSON()
            });
        },
        'error': async (form) => {
            let errors = {};
            for (let key in form.fields) {
                if (form.fields[key].error) {
                    errors[key] = form.fields[key].error;
                }
            }
            res.send(JSON.stringify(errors));
        }
    });
});

router.delete('/:member_id', async(req,res)=>{
    const memberId = req.params.member_id;
    const member = await dataLayer.getMemberByID(memberId);

    await member.destroy();

    res.json({
        'member': member.toJSON()
    });
});

module.exports = router;