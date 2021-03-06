import React, { Component } from 'react'
import { Icon } from 'antd'


const leftTitle = [
    {
        title: '常见问答',
        id: 1,
    },
    {
        title: '新手指南',
        id: 2,
    },
    {
        title: '联系方式',
        id: 3,
    }
]

export default class Help extends Component {
    state = {
        activeId: 1
    }
    render() {
        let activeId = this.state.activeId;
        return (
            <div className="help">
                <div className="help-content">
                    <div className="help-left">
                        <h2>帮助中心</h2>
                        <ul>
                            {
                                leftTitle.map((ele, index) => {
                                    if (ele.id === activeId) {
                                        return (
                                            <li>
                                                <a
                                                    style={{ color: '#a1bc22' }}
                                                    onClick={() => {
                                                        this.setState({ activeId: ele.id })
                                                    }}
                                                >{ele.title}
                                                </a>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li>
                                            <a
                                                onClick={() => {
                                                    this.setState({ activeId: ele.id })
                                                }}
                                            >{ele.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="help-right">
                        {activeId === 1?<Questions/>:null}
                        {activeId === 2?<Newhelp/>:null}
                        {activeId === 3?<ConnectUs/>:null}



                    </div>
                    <div className="clear">
                    </div>
                </div>

            </div>
        )

    }
}

function Newhelp() {
    return (
        <div>
            <h4>新用户注册</h4>
            <p>注册为本站会员，不仅便利您今后的购买操作，而且可以有机会享受优惠。当然，非注册会员同样可以浏览本站并购买商品。注册会员十分简单，只需要1分钟，填写最基本的手机号即可。本站承诺：对您的所有注册信息严格保密，只用于为您提供服务。</p>
            <h4>购物流程</h4>
            <p>第一步、挑选商品。访问本站，浏览并选择自己喜欢的商品。</p>
            <p>第二步、放入购物车。选定商品后，点击“放入购物车”按钮。</p>
            <p>第三步、结算。检查购物车并确认无误后，点击“去结算“按钮，进入确认订单页面。</p>
            <p>第四步、填写收货人的地址、电话等详细信息，便于我们的配送和其它服务。</p>
            <p>第五步、选择支付方式，目前网站只支持支付宝付款</p>
            <p>第六步、支付完成后可以在顶部查询订单按钮查询订单详情</p>
            <h4>订单的查询</h4>
            <p>点击登录正常登录以后，在个人中心“我的订单”选项里可进行相应操作。
    （1）查询订单:可以查询到订单的基本信息：订单号，订单金额，下单时间，订单处理状态等信息。如有疑问,可致电0515-88811100客服热线咨询。
    （2）订单修改：如订单已经提交成功,又确实需要修改，请尽快联系我们的客服0515-88811100，由我们的客服人员提供协助。
（3）取消订单：在订单状态为未处理的情况下，可在相应的订单后面点击“取消”按钮。其他情况则不能取消订单。</p>

        </div>

    )

}

function ConnectUs() {
    return (
        <div>
            <h3><Icon type="mail" /><span>邮箱：2972359739@qq.com</span></h3>
            <h3><Icon type="qq" /><span>QQ：2972359739</span></h3>
            <h3><Icon type="phone" /><span>联系电话：0515-88811100</span></h3>
        </div>
    )
}

function Questions() {
    return (
        <div >
            <h4>一、问：有货吗？</h4>
            <p>答：我们尽力保证上架商品的供应。但因为一些农产品和手工艺品季节性较强、供应链较长、储存中难免损耗，偶尔会出现超过预计的缺货、断货现象。碰到这种偶然情况，我们会在7天内通知您。对于暂时缺货产品，我们会征求您的意见是否等待到货。对于季节性断货产品，我们会取消订单并将货款退回原账号，欢迎您下个季节再来。</p>
            <h4>二、问：如何购买优选菜商城产品？</h4>
            <p>答：登录优选菜官网搜索到您要订购的产品，点击“立即购买或 加入购物车，在购物车中下一步→ 填写收货信息 → 确认订单 → 选择支付方式  → 去支付，即可，不用事先注册。</p>
            <h4>三、问：优选菜商城所售商品都是正品行货吗？</h4>
            <p>答：优选菜商城所售商品全部是正牌商品，与亲临商场选购的商品享受同样的质量保证。详见售后服务说明</p>
            <h4>四、问：下单后何时可以收到货？</h4>
            <p>答：将根据您的收货地址及所选择的配送方式而不同，一般到货时间在3-7天，偏远地区配送时间可能会更长一些。</p>
            <h4>五、问：快递费是多少？</h4>
            <p>答：运费按产品来收取，不同产品运费收取不同，每个产品详细页都有“配送说明”请参考，谢谢！</p>
            <h4>六、问：下单时可以指定送货时间吗？</h4>
            <p>答：可以，您可以在订单留言里填写具体的送货需求，我们会尽量满足您的要求。</p>
            <h4>七、问：收货时发现问题可以拒收吗？</h4>
            <p>答：在签收货物时如发现货物有损坏，请直接拒收退回，相关人员将为您重新安排发货。</p>
            <h4>八、问：下单后，我能做什么？</h4>
            <p>答：如果是在线支付方式，请您尽快完成付款，待付款被确认后我们会立即为您发货。如果选择货到付款，您可以进入“我的帐户”，在“我的订单”中找到您的订单，然后可随时查看订单处理状态，做好收货准备。</p>
            <h4>九、问：如何办理退款？多久退回？</h4>
            <p>答：请在线或使用电话（0515-88811100）与客服联系，告诉要退款的相关信息。从受理到退回帐户一般需要2-4个工作日。</p>
            <h4>十、问：如何办理退换货？？</h4>
            <p>答：关于退货：1、自客户签收商品之日起7日内，商品如有质量问题，可以退货，非质量问题只能调换。 2、套装商品不可部分退货。</p>
            <p>关于换货：1、自客户签收商品之日起15日内，商品如未经使用、损坏、拆装，可以换货。 2、非套装商品只能更换同一商户商品，不提供不同商户不同类商品的换货服务。套装商品可以部分或全部换货，但只能更换与原商品同样的商品。 详细信息请联系在线客服或者：0515-88811100或邮箱：2972359739@qq.com</p>
        </div>
    )
}